import React, { useState, useContext } from "react";
import DataContext from "../../context/DataContext";
import generateId from "../../helpers/generateID";
import depWithInputCheck from "../../helpers/DepWithInputCheck";
import ErrorMessage from "../../helpers/ErrorMessage";

function Withdraw({ ACCOUNTNUMBER }) {
  const { accounts, updateAccounts, isAdmin } = useContext(DataContext);
  const [withdrawInput, setWithdrawInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const accountMatch = accounts.find(
    (element) => element.accountNumber === parseInt(withdrawInput)
  );
  let errorType = depWithInputCheck(accountMatch, amountInput);

  const resetError = () => {
    setErrorMessage("");
    setSubmitted(false);
  };

  const handleErrorChange = (value) => {
    setErrorMessage(value);
  };

  const undoBlur = () => {
    // if (isAdmin) {
    //   document.querySelector('.admin-dashboard').classList.remove('blur');
    //   document.querySelector('.add-account-container').classList.remove('blur');
    //   document.querySelector('.table-box').classList.remove('blur');
    // } else if (!isAdmin) {
    //   document.querySelector('.dashboard').classList.remove('blur');
    //   document.querySelector('.top-bar').classList.remove('blur');
    //   document.querySelector('.card-container').classList.remove('blur');
    //   document.querySelector('.bottom-nav').classList.remove('blur');
    // }
    // document.querySelector('.transactions').classList.remove('blur');
    document.querySelector(".deposit-page").classList.remove("show-deposit");
    document.querySelector(".withdraw-page").classList.remove("show-withdraw");
    document.querySelector(".transfer-page").classList.remove("show-transfer");
  };

  const handleAmountChange = (e) => {
    setAmountInput(e.target.value);
    resetError();
    if (ACCOUNTNUMBER) {
      setWithdrawInput(ACCOUNTNUMBER);
    }
  };


  const withdrawMoney = () => {
    setSubmitted(true);
    if (errorType === 20) {
      setSubmitted(false);
      undoBlur();
      let id = generateId(20);
      let mainCopy = [...accounts];
      let accountCopy = { ...mainCopy[mainCopy.indexOf(accountMatch)] };
      accountCopy.money = parseInt(accountCopy.money) - parseInt(amountInput);
      mainCopy[mainCopy.indexOf(accountMatch)] = {
        ...accountCopy,
        history: [...accountCopy.history, { id: id, type: "Withdraw" }],
      };
      updateAccounts([...mainCopy]);
      setEmailInput("");
      setAmountInput("");
      setWithdrawInput("");
    }
  };

  return (
    <div className="withdraw-page">
      <div className="withdraw-container">
        <div onClick={undoBlur} className="close-button">
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
        <div className="withdraw-input">
          {submitted && (
            <ErrorMessage
              errorType={errorType}
              errorMessage={errorMessage}
              onErrorChange={handleErrorChange}
            />
          )}
          <input
            className="account-number-input"
            list="accounts"
            type="number"
            placeholder="Account Number"
            onChange={(e) => {
              setWithdrawInput(e.target.value);
              resetError();
            }}
            value={ACCOUNTNUMBER ? ACCOUNTNUMBER : withdrawInput}
          ></input>
          <datalist id="accounts">
            {accounts.map((account) => {
              if (account.accountNumber) {
                return (
                  <option
                    key={account.accountNumber}
                    value={account.accountNumber}
                  />
                );
              }
            })}
          </datalist>
          <input
            className="withdraw-amount"
            type="number"
            placeholder="Amount"
            onChange={handleAmountChange}
            value={amountInput}
          ></input>
          <div className="send-receipt">Send receipt to:</div>
          <input
            className="input-receipt"
            type="email"
            placeholder="name@example.com"
            onChange={(e) => {
              setEmailInput(e.target.value);
              resetError();
            }}
            value={emailInput}
          ></input>
          <button onClick={withdrawMoney} className="withdraw-button">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;

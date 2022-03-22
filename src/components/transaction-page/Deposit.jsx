import React, { useState, useContext } from "react";
import DataContext from "../../context/DataContext";

function Deposit({ ACCOUNTNUMBER }) {
  const { accounts, updateAccounts } = useContext(DataContext);
  const [depositInput, setDepositInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const undoBlur = () => {
    // if (isAdmin) {
    //   document.querySelector(".admin-dashboard").classList.remove("blur");
    //   document.querySelector(".add-account-container").classList.remove("blur");
    //   document.querySelector(".table-box").classList.remove("blur");
    // } else if (!isAdmin) {
    //   document.querySelector(".dashboard").classList.remove("blur");
    //   document.querySelector(".top-bar").classList.remove("blur");
    //   document.querySelector(".card-container").classList.remove("blur");
    //   document.querySelector(".bottom-nav").classList.remove("blur");
    // }
    // document.querySelector(".transactions").classList.remove("blur");
    document.querySelector(".deposit-page").classList.remove("show-deposit");
    document.querySelector(".withdraw-page").classList.remove("show-withdraw");
    document.querySelector(".transfer-page").classList.remove("show-transfer");
    setErrorMessage("");
    setEmailInput("");
    setAmountInput("");
    setDepositInput("");
  };

  const handleAmountChange = (e) => {
    setAmountInput(e.target.value);
    if (ACCOUNTNUMBER) {
      setDepositInput(ACCOUNTNUMBER);
    }
  };

  function dec2hex (dec) {
    return dec.toString(16).padStart(2, "0")
  }

  function generateId (len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
  }

  const depositMoney = () => {
    const accountMatch = accounts.find(
      (element) => element.accountNumber == depositInput
    );
    if (accountMatch && parseInt(amountInput) > 0) {
      undoBlur();
      let id = generateId(20)
      let mainCopy = [...accounts];
      let accountCopy = { ...mainCopy[mainCopy.indexOf(accountMatch)] };
      accountCopy.money = parseInt(accountCopy.money) + parseInt(amountInput);
      mainCopy[mainCopy.indexOf(accountMatch)] = { ...accountCopy, history: [...accountCopy.history, {id: id, type: 'Deposit'}] };
      updateAccounts([...mainCopy]);
      setEmailInput("");
      setAmountInput("");
      setDepositInput("");
      setErrorMessage("");
    } else if (!accountMatch) {
      setErrorMessage({
        placeholder: "xxxxxxxxx",
        message: "account not found",
      });
    } else if (parseInt(amountInput) <= 0 || amountInput === "") {
      setErrorMessage({
        placeholder: "Amount",
        message: "invalid amount input",
      });
    }
  };

  function renderError(placeholder) {
    if (errorMessage.placeholder === placeholder) {
      return <div className="error-message">{errorMessage.message}</div>;
    }
  }

  return (
    <div className="deposit-page">
      <div className="deposit-container">
        <div onClick={undoBlur} className="close-button">
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
        <div className="deposit-input">
          <input
            className="account-number-input"
            type="number"
            list="accounts"
            placeholder="Account Number"
            onChange={(e) => {setDepositInput(e.target.value)}}
            value={ACCOUNTNUMBER ? ACCOUNTNUMBER : depositInput}
          ></input>
          <datalist id="accounts">
            {accounts.map((item) => {
              if (item.accountNumber) {
                return (
                  <option key={item.accountNumber} value={item.accountNumber} />
                );
              }
            })}
          </datalist>
          {renderError("xxxxxxxxx")}
          <input
            className="deposit-amount"
            type="number"
            placeholder="Amount"
            onChange={handleAmountChange}
            value={amountInput}
          ></input>
          {renderError("Amount")}
          <div className="send-receipt">Send receipt to:</div>
          <input
            className="input-receipt"
            type="email"
            placeholder="name@example.com"
            onChange={(e)=>{setEmailInput(e.target.value)}}
            value={emailInput}
          ></input>
          <button onClick={depositMoney} className="deposit-button">
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deposit;

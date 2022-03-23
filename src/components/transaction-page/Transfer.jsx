import React, { useState, useContext } from "react";
import DataContext from "../../context/DataContext";
import generateId from "../../helpers/generateID";
import transferInputCheck from "../../helpers/transferInputCheck";
import ErrorMessage from "../../helpers/ErrorMessage";

function Transfer({ ACCOUNTNUMBER }) {
  const { accounts, updateAccounts, isAdmin } = useContext(DataContext);
  const [senderInput, setSenderInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [recipientInput, setRecipientInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const senderMatch = accounts.find(
    (element) => element.accountNumber == senderInput
  );
  const recipientMatch = accounts.find(
    (element) => element.accountNumber == recipientInput
  );
  let errorType = transferInputCheck(senderMatch, recipientMatch, amountInput);

  const resetError = () => {
    setErrorMessage("");
    setSubmitted(false);
  };

  const handleErrorChange = (value) => {
    setErrorMessage(value);
  };

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
  };

  const handleAmountChange = (e) => {
    setAmountInput(e.target.value);
    resetError();
    if (ACCOUNTNUMBER) {
      setSenderInput(ACCOUNTNUMBER);
    }
  };

  const transferMoney = () => {
    setSubmitted(true);
    if (errorType === 20) {
      setSubmitted(false);
      undoBlur();
      let mainCopy = [...accounts];
      let senderCopy = { ...mainCopy[mainCopy.indexOf(senderMatch)] };
      let recipientCopy = { ...mainCopy[mainCopy.indexOf(recipientMatch)] };
      senderCopy.money = parseInt(senderCopy.money) - parseInt(amountInput);
      recipientCopy.money =
        parseInt(recipientCopy.money) + parseInt(amountInput);
      mainCopy[mainCopy.indexOf(senderMatch)] = {
        ...senderCopy,
        history: [
          ...senderCopy.history,
          { id: generateId(20), type: "Transfer" },
        ],
      };
      mainCopy[mainCopy.indexOf(recipientMatch)] = {
        ...recipientCopy,
        history: [
          ...recipientCopy.history,
          { id: generateId(20), type: "Receive" },
        ],
      };
      updateAccounts([...mainCopy]);
      setErrorMessage("");
      setSenderInput("");
      setRecipientInput("");
      setAmountInput("");
      setEmailInput("");
    }
  };

  return (
    <div className="transfer-page">
      <div className="transfer-container">
        <div onClick={undoBlur} className="close-button">
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
        <div className="transfer-input">
          {submitted && (
            <ErrorMessage
              errorType={errorType}
              errorMessage={errorMessage}
              onErrorChange={handleErrorChange}
            />
          )}
          <input
            className="transfer-from-input"
            list="accounts"
            placeholder="Sender"
            onChange={(e) => {
              setSenderInput(e.target.value);
            }}
            value={ACCOUNTNUMBER ? ACCOUNTNUMBER : senderInput}
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
            className="transfer-amount"
            type="number"
            placeholder="Amount"
            onChange={handleAmountChange}
            value={amountInput}
          />
          <input
            className="transfer-to-input"
            list="accounts"
            placeholder="Recipient"
            onChange={(e) => {
              setRecipientInput(e.target.value);
              resetError();
            }}
            value={recipientInput}
          />
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
          {/* <div className="send-receipt">Send receipt to:</div>
          <input
            className="input-receipt"
            type="email"
            placeholder="name@example.com"
            onChange={(e)=>{setEmailInput(e.target.value)}}
            value={emailInput}
          ></input> */}
          <button onClick={transferMoney} className="transfer-button">
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transfer;

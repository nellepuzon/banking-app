import React, { useState } from 'react';

const undoBlur = () => {
    document.querySelector('.admin-dashboard').classList.remove('blur');
    document.querySelector('.add-account-container').classList.remove('blur');
    document.querySelector('.table-box').classList.remove('blur');
    document.querySelector('.transactions').classList.remove('blur');
    document.querySelector('.deposit-page').classList.remove('show-deposit');
    document.querySelector('.withdraw-page').classList.remove('show-withdraw');
    document.querySelector('.transfer-page').classList.remove('show-transfer');
}


function Transfer({accounts, setAccounts}) {
  const [senderInput, setSenderInput] = useState("")
  const [amountInput, setAmountInput] = useState("")
  const [recipientInput, setRecipientInput] = useState("")
  const [errorMessage, setErrorMessage] = useState("") 
  const [emailInput, setEmailInput] = useState("")

  const handleSenderChange = (e) => {
    setSenderInput(e.target.value)
  }
  
  const handleAmountChange = (e) => {
    setAmountInput(e.target.value)
  }
  
  const handleRecipientChange = (e) => {
    setRecipientInput(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value)
  }

  const transferMoney = () => {
    const senderMatch = accounts.find((element) => element.fullName === senderInput)
    const recipientMatch = accounts.find((element) => element.fullName === recipientInput)

    if(senderMatch && recipientMatch && parseInt(senderMatch.money) > parseInt(amountInput) && parseInt(amountInput) > 0) {
      undoBlur();
        let mainCopy = [...accounts]
        let senderCopy = {...mainCopy[mainCopy.indexOf(senderMatch)]}
        let recipientCopy = {...mainCopy[mainCopy.indexOf(recipientMatch)]}
        senderCopy.money = parseInt(senderCopy.money) - parseInt(amountInput)
        recipientCopy.money = parseInt(recipientCopy.money) + parseInt(amountInput)
        mainCopy[mainCopy.indexOf(senderMatch)] = senderCopy
        mainCopy[mainCopy.indexOf(recipientMatch)] = recipientCopy
        setAccounts([...mainCopy])
        localStorage.setItem("accounts", JSON.stringify([...mainCopy]))
        setErrorMessage("")
        setSenderInput("")
        setRecipientInput("")
        setAmountInput("")
        setEmailInput("")
    } else if (!senderMatch && recipientMatch && amountInput !== "") {
        setErrorMessage({message: 'sender account not found'})
    } else if (!recipientInput && senderMatch && amountInput !== "") {
      setErrorMessage({message: 'recipient account not found'})
    } else if (parseInt(amountInput) <= 0) {
      setErrorMessage({message: 'invalid amount input'})
    } else if (parseInt(senderMatch.money) < parseInt(amountInput) && recipientMatch) {
      setErrorMessage({message: 'not enough balance'})
    } else if (!senderMatch && !recipientMatch && amountInput === ""){
      setErrorMessage({message: 'fill out all necessary information'})
    }
  }

  function renderError() {
    if(errorMessage) {
      return <div className='error-message'>{errorMessage.message}</div>
    }
  }

  return (
    <div className='transfer-page'>
      <div className='transfer-container'>
        <div className='transfer-nav'><div className='transfer-from-text'>From:</div>
        <div onClick={undoBlur} className='close-button'>
            <i className='fa-solid fa-circle-xmark'></i>
          </div></div>
        <div className='transfer-input'>
          {renderError()}
          <input className='transfer-from-input' placeholder='Sender' onChange={handleSenderChange} value={senderInput}></input>
          <input
            className='transfer-amount'
            type='number'
            placeholder='Amount'
            onChange={handleAmountChange}
            value={amountInput}
          ></input>
          <div className='transfer-to-text'>To:</div>
          <input className='transfer-to-input' placeholder='Recipient' onChange={handleRecipientChange} value={recipientInput}></input>
          <div className='send-receipt'>Send receipt to:</div>
          <input
            className='input-receipt'
            type='email'
            placeholder='name@example.com'
            onChange={handleEmailChange}
            value={emailInput}
          ></input>
          <button onClick={transferMoney} className='transfer-button'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Transfer;

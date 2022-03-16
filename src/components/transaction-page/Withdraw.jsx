import React, { useState } from 'react';

const undoBlur = () => {
  // document.querySelector('.admin-dashboard').classList.remove('blur');
  // document.querySelector('.add-account-container').classList.remove('blur');
  // document.querySelector('.table-box').classList.remove('blur');
  // document.querySelector('.transactions').classList.remove('blur');
  document.querySelector('.deposit-page').classList.remove('show-deposit');
  document.querySelector('.withdraw-page').classList.remove('show-withdraw');
  document.querySelector('.transfer-page').classList.remove('show-transfer');
};


function Withdraw({accounts, setAccounts, accountNumber}) {
  const [withdrawInput, setWithdrawInput] = useState("")
  const [amountInput, setAmountInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  
  const handleWithdrawChange = (e) => {
    setWithdrawInput(e.target.value)
  }
  
  const handleAmountChange = (e) => {
    setAmountInput(e.target.value)
    if(accountNumber) {
      setWithdrawInput(accountNumber)
    }
  }
  
  const handleEmailChange = (e) => {
    setEmailInput(e.target.value)
  }
  
  const withdrawMoney = () => {
    const accountMatch = accounts.find(element => element.accountNumber === parseInt(withdrawInput))
    
    if (accountMatch && parseInt(amountInput) > 0 && parseInt(accountMatch.money) > parseInt(amountInput)) {
      undoBlur();
      let mainCopy = [...accounts]
      let accountCopy = {...mainCopy[mainCopy.indexOf(accountMatch)]}
      accountCopy.money = parseInt(accountCopy.money) - parseInt(amountInput)
      mainCopy[mainCopy.indexOf(accountMatch)] = accountCopy
      setAccounts([...mainCopy])
      localStorage.setItem("accounts", JSON.stringify([...mainCopy]))
      setEmailInput("")
      setAmountInput("")
      setWithdrawInput("")
    } else if (!accountMatch) {
      setErrorMessage({placeholder: 'xxxxxxxxx', message: "account not found"})
    } else if (parseInt(amountInput) <= 0 || amountInput === "") {
      setErrorMessage({placeholder: "Amount",message: "invalid amount input"})
    } else if ( parseInt(amountInput) > parseInt(accountMatch.money)) {
      setErrorMessage({placeholder: "Amount", message: "not enough balance"})
    }
  }

  function renderError(placeholder) {
    if(errorMessage.placeholder === placeholder) {
      return <div className='error-message'>{errorMessage.message}</div>
    }
  }

  return (
    <div className='withdraw-page'>
      <div className='withdraw-container'>
        <div className='withdraw-nav'>
        <div className='withdraw-name-text'>Account Number:</div>
        <div onClick={undoBlur} className='close-button'>
            <i className='fa-solid fa-circle-xmark'></i>
          </div>
        </div>
        <div className='withdraw-input'>
          <input className='withdraw-from-input' type="number" placeholder='xxxxxxxxx' onChange={handleWithdrawChange} value={accountNumber?accountNumber:withdrawInput}></input>
          {renderError('xxxxxxxxx')}
          <input
            className='withdraw-amount'
            type='number'
            placeholder='Amount'
            onChange={handleAmountChange}
            value={amountInput}
          ></input>
          {renderError('Amount')}
          <div className='send-receipt'>Send receipt to:</div>
          <input
            className='input-receipt'
            type='email'
            placeholder='name@example.com'
            onChange={handleEmailChange}
            value={emailInput}
          ></input>
          <button onClick={withdrawMoney} className='withdraw-button'>
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;

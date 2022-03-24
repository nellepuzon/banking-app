import React, { useState, useContext } from 'react';
import DataContext from '../../context/DataContext';
import generateId from '../../helpers/generateID';
import depWithInputCheck from '../../helpers/DepWithInputCheck';
import ErrorMessage from '../../helpers/ErrorMessage';

function Deposit({ ACCOUNTNUMBER }) {
  const { accounts, updateAccounts } = useContext(DataContext);
  const [depositInput, setDepositInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const accountMatch = accounts.find(
    (element) => element.accountNumber == depositInput
  );
  let errorType = depWithInputCheck(accountMatch, amountInput);

  const resetError = () => {
    setErrorMessage('');
    setSubmitted(false);
  };

  const handleErrorChange = (value) => {
    setErrorMessage(value);
  };

  const undoBlur = () => {
    document.querySelector('.deposit-page').classList.remove('show-deposit');
    document.querySelector('.withdraw-page').classList.remove('show-withdraw');
    document.querySelector('.transfer-page').classList.remove('show-transfer');
    setErrorMessage('');
    setEmailInput('');
    setAmountInput('');
    setDepositInput('');
  };

  const handleAmountChange = (e) => {
    setAmountInput(e.target.value);
    resetError();
    if (ACCOUNTNUMBER) {
      setDepositInput(ACCOUNTNUMBER);
    }
  };

  const depositMoney = () => {
    setSubmitted(true);
    if (errorType === 20) {
      setSubmitted(false);
      undoBlur();
      let id = generateId(20);
      let mainCopy = [...accounts];
      let accountCopy = { ...mainCopy[mainCopy.indexOf(accountMatch)] };
      accountCopy.money = parseInt(accountCopy.money) + parseInt(amountInput);
      mainCopy[mainCopy.indexOf(accountMatch)] = {
        ...accountCopy,
        history: [...accountCopy.history, { id: id, type: 'Deposit' }],
      };
      updateAccounts([...mainCopy]);
      setEmailInput('');
      setAmountInput('');
      setDepositInput('');
      setErrorMessage('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      depositMoney();
    }
  };

  return (
    <div className='deposit-page'>
      <div className='deposit-container'>
        <div onClick={undoBlur} className='close-button'>
          <i className='fa-solid fa-circle-xmark'></i>
        </div>
        <div className='deposit-input'>
          {submitted && (
            <ErrorMessage
              errorType={errorType}
              errorMessage={errorMessage}
              onErrorChange={handleErrorChange}
            />
          )}
          <input
            className='account-number-input'
            type='number'
            list='accounts'
            placeholder='Account Number'
            onKeyPress={handleKeyPress}
            onChange={(e) => {
              setDepositInput(e.target.value);
              resetError();
            }}
            value={ACCOUNTNUMBER ? ACCOUNTNUMBER : depositInput}
          ></input>
          <datalist id='accounts'>
            {accounts.map((item) => {
              if (item.accountNumber) {
                return (
                  <option key={item.accountNumber} value={item.accountNumber} />
                );
              }
            })}
          </datalist>
          <input
            className='deposit-amount'
            type='number'
            placeholder='Amount'
            onKeyPress={handleKeyPress}
            onChange={handleAmountChange}
            value={amountInput}
          ></input>
          <div className='send-receipt'>Send receipt to:</div>
          <input
            className='input-receipt'
            type='email'
            placeholder='name@example.com'
            onKeyPress={handleKeyPress}
            onChange={(e) => {
              setEmailInput(e.target.value);
              resetError();
            }}
            value={emailInput}
          ></input>
          <button onClick={depositMoney} className='deposit-button'>
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deposit;

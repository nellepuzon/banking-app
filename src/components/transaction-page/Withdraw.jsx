import React, { useState } from 'react';
import depWithInputCheck from '../../helpers/DepWithInputCheck';
import ErrorMessage from '../../helpers/ErrorMessage';
import onMoneyChange from '../../helpers/onMoneyChange';
import useDataContext from '../../hooks/useDataContext';

function Withdraw({ ACCOUNTNUMBER, className, setShowWithdraw }) {
  const { accounts, updateAccounts } = useDataContext();
  const [withdrawInput, setWithdrawInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const accountMatch = accounts.find(
    (element) => element.accountNumber === parseInt(withdrawInput)
  );
  let errorType = depWithInputCheck(accountMatch, amountInput);

  const resetError = () => {
    setErrorMessage('');
    setSubmitted(false);
  };

  const handleErrorChange = (value) => {
    setErrorMessage(value);
  };

  const handleAmountChange = (e) => {
    setAmountInput(e.target.value);
    resetError();
    if (ACCOUNTNUMBER) {
      setWithdrawInput(ACCOUNTNUMBER);
    }
  };

  const resetInput = () => {
    setEmailInput('');
    setAmountInput('');
    setWithdrawInput('');
  };

  const withdrawMoney = () => {
    setSubmitted(true);
    if (errorType === null) {
      setSubmitted(false);
      onMoneyChange(
        accountMatch,
        null,
        amountInput,
        accounts,
        updateAccounts,
        'withdraw'
      );
      resetInput();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      withdrawMoney();
    }
  };

  const handleCloseWithdraw = () => {
    setShowWithdraw(false);
    resetInput();
  };

  return (
    <div className={`deposit-page ${className}`}>
      <div className='withdraw-container'>
        <div onClick={handleCloseWithdraw} className='close-button'>
          <i className='fa-solid fa-circle-xmark'></i>
        </div>
        <div className='withdraw-input'>
          {submitted && (
            <ErrorMessage
              errorType={errorType}
              errorMessage={errorMessage}
              onErrorChange={handleErrorChange}
            />
          )}
          <input
            className='account-number-input'
            list='accounts'
            type='number'
            placeholder='Account Number'
            onKeyPress={handleKeyPress}
            onChange={(e) => {
              setWithdrawInput(e.target.value);
              resetError();
            }}
            value={ACCOUNTNUMBER ? ACCOUNTNUMBER : withdrawInput}
          ></input>
          <datalist id='accounts'>
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
            className='withdraw-amount'
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
            onChange={(e) => {
              setEmailInput(e.target.value);
              resetError();
            }}
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

import React, { useState } from 'react';
import transferInputCheck from '../../helpers/transferInputCheck';
import ErrorMessage from '../../helpers/ErrorMessage';
import onMoneyChange from '../../helpers/onMoneyChange';
import useDataContext from '../../hooks/useDataContext';

function Transfer({ accountNumber, className, setShowTransfer, setShowMessage }) {
  const { accounts, updateAccounts } = useDataContext();
  const [senderInput, setSenderInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [recipientInput, setRecipientInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const senderMatch = accounts.find(
    (element) => element.accountNumber == senderInput
  );
  const recipientMatch = accounts.find(
    (element) => element.accountNumber == recipientInput
  );
  let errorType = transferInputCheck(senderMatch, recipientMatch, amountInput);

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
    if (accountNumber) {
      setSenderInput(accountNumber);
    }
  };

  const resetInput = () => {
    setRecipientInput('');
    setErrorMessage('');
    setSenderInput('');
    setAmountInput('');
    setEmailInput('');
  };

  const transferMoney = () => {
    setSubmitted(true);
    if (errorType === null) {
      setSubmitted(false);
      handleCloseTransfer();
      onMoneyChange(
        senderMatch,
        recipientMatch,
        amountInput,
        accounts,
        updateAccounts,
        'transfer'
      );
      resetInput();
      setShowMessage(true)
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      transferMoney();
    }
  };

  const handleCloseTransfer = () => {
    setShowTransfer(false);
    resetInput();
  };

  return (
    <div className={`transfer-page ${className}`}>
      <div className='transfer-container'>
        <div onClick={handleCloseTransfer} className='close-button'>
          <i className='fa-solid fa-circle-xmark'></i>
        </div>
        <div className='transfer-input'>
          {submitted && (
            <ErrorMessage
              errorType={errorType}
              errorMessage={errorMessage}
              onErrorChange={handleErrorChange}
            />
          )}
          <input
            className='transfer-from-input'
            list='accounts'
            placeholder='Sender'
            onKeyPress={handleKeyPress}
            onChange={(e) => {
              setSenderInput(e.target.value);
            }}
            value={accountNumber ? accountNumber : senderInput}
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
            className='transfer-amount'
            type='number'
            placeholder='Amount'
            onKeyPress={handleKeyPress}
            onChange={handleAmountChange}
            value={amountInput}
          />
          <input
            className='transfer-to-input'
            list='accounts'
            placeholder='Recipient'
            onKeyPress={handleKeyPress}
            onChange={(e) => {
              setRecipientInput(e.target.value);
              resetError();
            }}
            value={recipientInput}
          />
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
          <div className='send-receipt'>Send receipt to:</div>
          <input
            className='input-receipt'
            type='email'
            placeholder='name@example.com'
            onChange={(e) => {
              setEmailInput(e.target.value);
            }}
            value={emailInput}
          ></input>
          <button onClick={transferMoney} className='transfer-button'>
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transfer;

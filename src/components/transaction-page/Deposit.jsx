import React from 'react';

const undoBlur = () => {
  document.querySelector('.admin-dashboard').classList.remove('blur');
  document.querySelector('.add-account-container').classList.remove('blur');
  document.querySelector('.table-box').classList.remove('blur');
  document.querySelector('.transactions').classList.remove('blur');
};

const depositMoney = () => {
  undoBlur();
  document.querySelector('.deposit-page').classList.remove('show-deposit');
  document.querySelector('.withdraw-page').classList.remove('show-withdraw');
  document.querySelector('.transfer-page').classList.remove('show-transfer');

};

function Deposit() {
  return (
    <div className='deposit-page'>
      <div className='deposit-container'>
        <div className='deposit-input'>
          <div className='deposit-name-text'>Account Number:</div>
          <input className='deposit-from-input' type="number" placeholder='xxxxxxxxx'></input>
          <input
            className='deposit-amount'
            type='number'
            placeholder='Amount'
          ></input>
          <div className='send-receipt'>Send receipt to:</div>
          <input
            className='input-receipt'
            type='email'
            placeholder='name@example.com'
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

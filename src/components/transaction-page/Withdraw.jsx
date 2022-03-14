import React from 'react';

const undoBlur = () => {
  document.querySelector('.admin-dashboard').classList.remove('blur');
  document.querySelector('.add-account-container').classList.remove('blur');
  document.querySelector('.table-box').classList.remove('blur');
  document.querySelector('.transactions').classList.remove('blur');
};

const withdrawMoney = () => {
  undoBlur();
  document.querySelector('.deposit-page').classList.remove('show-deposit');
  document.querySelector('.withdraw-page').classList.remove('show-withdraw');
  document.querySelector('.transfer-page').classList.remove('show-transfer');
};

function Withdraw() {
  return (
    <div className='withdraw-page'>
      <div className='withdraw-container'>
        <div className='withdraw-input'>
          <div className='withdraw-name-text'>Account Number:</div>
          <input className='withdraw-from-input' type="number" placeholder='xxxxxxxxx'></input>
          <input
            className='withdraw-amount'
            type='number'
            placeholder='Amount'
          ></input>
          <div className='send-receipt'>Send receipt to:</div>
          <input
            className='input-receipt'
            type='email'
            placeholder='name@example.com'
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

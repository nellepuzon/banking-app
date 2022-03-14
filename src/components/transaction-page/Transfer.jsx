import React from 'react';

const undoBlur = () => {
    document.querySelector('.admin-dashboard').classList.remove('blur');
    document.querySelector('.add-account-container').classList.remove('blur');
    document.querySelector('.table-box').classList.remove('blur');
    document.querySelector('.transactions').classList.remove('blur');
}

const transferMoney = () => {
  undoBlur();
  document.querySelector('.deposit-page').classList.remove('show-deposit');
  document.querySelector('.withdraw-page').classList.remove('show-withdraw');
  document.querySelector('.transfer-page').classList.remove('show-transfer');
};

function Transfer() {
  return (
    <div className='transfer-page'>
      <div className='transfer-container'>
        <div className='transfer-input'>
          <div className='transfer-from-text'>From:</div>
          <input className='transfer-from-input' placeholder='Sender'></input>
          <input
            className='transfer-amount'
            type='number'
            placeholder='Amount'
          ></input>
          <div className='transfer-to-text'>To:</div>
          <input className='transfer-to-input' placeholder='Recipient'></input>
          <div className='send-receipt'>Send receipt to:</div>
          <input
            className='input-receipt'
            type='email'
            placeholder='name@example.com'
          ></input>
          <button onClick={transferMoney} className='transfer-button'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Transfer;

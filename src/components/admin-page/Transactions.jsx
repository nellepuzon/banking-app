import React from 'react';
import Transfer from '../transaction-page/Transfer';

const clickTransfer = () => {
  document.querySelector('.admin-dashboard').classList.add('blur');
  document.querySelector('.add-account-container').classList.add('blur');
  document.querySelector('.table-box').classList.add('blur');
  document.querySelector('.transactions').classList.add('blur');
  document.querySelector('.transfer-page').classList.add('show-transfer');
  console.log(document.querySelector('.transfer-page'))
};

function Transactions() {
  return (
    <div class='transactions'>
      <div class='deposit trans'>
        <div class='deposit-icon icon'>
          <i class='fa-solid fa-money-bill-1-wave'></i>
        </div>
        <div class='deposit-text text'>Deposit</div>
      </div>

      <div class='withdraw trans'>
        <div class='withdraw-icon icon'>
          <i class='fa-solid fa-hand-holding-dollar'></i>{' '}
        </div>
        <div class='withdraw-text text'>Withdraw</div>
      </div>

      <div onClick={clickTransfer} class='transfer trans'>
        <div class='transfer-icon icon'>
          <i class='fa-solid fa-paper-plane'></i>{' '}
        </div>
        <div class='transfer-text text'>Transfer</div>
      </div>
    </div>
  );
}

export default Transactions;

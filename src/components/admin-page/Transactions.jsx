import React from 'react';
import Transfer from '../transaction-page/Transfer';

const blurPage = () => {
  document.querySelector('.admin-dashboard').classList.add('blur');
  document.querySelector('.add-account-container').classList.add('blur');
  document.querySelector('.table-box').classList.add('blur');
  document.querySelector('.transactions').classList.add('blur');
};

const clickDeposit = () => {
  blurPage();
  document.querySelector('.deposit-page').classList.toggle("show-deposit")
  // document.querySelector('.withdraw-page').classList.add('hide-transaction');
  //   document.querySelector('.transfer-page').classList.add('hide-transaction');
  //   document.querySelector('.withdraw-page').classList.remove('hide-transaction');
  //   document.querySelector('.transfer-page').classList.remove('hide-transaction');
}

const clickWithdraw = () => {
  blurPage();
  document.querySelector('.withdraw-page').classList.toggle('show-withdraw')
  // document.querySelector('.deposit-page').classList.add('hide-transaction');
  // document.querySelector('.transfer-page').classList.add('hide-transaction');
  // document.querySelector('.deposit-page').classList.remove('hide-transaction');
  // document.querySelector('.transfer-page').classList.remove('hide-transaction');
}

const clickTransfer = () => {
  blurPage();
  document.querySelector('.transfer-page').classList.toggle('show-transfer');
  // document.querySelector('.deposit-page').classList.add('hide-transaction');
  // document.querySelector('.withdraw-page').classList.add('hide-transaction');
  // document.querySelector('.deposit-page').classList.remove('hide-transaction');
  // document.querySelector('.withdraw-page').classList.remove('hide-transaction');
}

function Transactions() {
  return (
    <div onClick={clickDeposit} className='transactions'>
      <div className='deposit trans'>
        <div className='deposit-icon icon'>
          <i className='fa-solid fa-money-bill-1-wave'></i>
        </div>
        <div className='deposit-text text'>Deposit</div>
      </div>

      <div onClick={clickWithdraw} className='withdraw trans'>
        <div className='withdraw-icon icon'>
          <i className='fa-solid fa-hand-holding-dollar'></i>{' '}
        </div>
        <div className='withdraw-text text'>Withdraw</div>
      </div>

      <div onClick={clickTransfer} className='transfer trans'>
        <div className='transfer-icon icon'>
          <i className='fa-solid fa-paper-plane'></i>{' '}
        </div>
        <div className='transfer-text text'>Transfer</div>
      </div>
    </div>
  );
}

export default Transactions;

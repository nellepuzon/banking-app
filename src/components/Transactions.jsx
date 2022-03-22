import React, {useContext} from 'react';
import DataContext from '../context/DataContext';

function Transactions({ className = '' }) {
  const isAdmin = useContext(DataContext)
  const blurPage = () => {
    if (isAdmin === true) {
      document.querySelector('.admin-dashboard').classList.add('blur');
      document.querySelector('.add-account-container').classList.add('blur');
      document.querySelector('.table-box').classList.add('blur');
    } else if (isAdmin === false) {
      document.querySelector('.dashboard').classList.add('blur');
      document.querySelector('.top-bar').classList.add('blur');
      document.querySelector('.card-container').classList.add('blur');
      document.querySelector('.bottom-nav').classList.add('blur');
    }
    document.querySelector('.transactions').classList.add('blur');
  };

  const clickDeposit = () => {
    blurPage();
    document.querySelector('.deposit-page').classList.add('show-deposit');
  };

  const clickWithdraw = () => {
    blurPage();
    document.querySelector('.withdraw-page').classList.add('show-withdraw');
  };

  const clickTransfer = () => {
    blurPage();
    document.querySelector('.transfer-page').classList.add('show-transfer');
  };

  return (
    <div onClick={clickDeposit} className={`transactions ${className}`}>
      <div className={`deposit trans ${className}`}>
        <div className={`deposit-icon icon ${className}`}>
          <i className='fa-solid fa-money-bill-1-wave'></i>
        </div>
        <div className={`deposit-text text ${className}`}>Deposit</div>
      </div>
      <div onClick={clickWithdraw} className={`withdraw trans ${className}`}>
        <div className={`withdraw-icon icon ${className}`}>
          <i className='fa-solid fa-hand-holding-dollar'></i>
        </div>
        <div className={`withdraw-text text ${className}`}>Withdraw</div>
      </div>
      <div onClick={clickTransfer} className={`transfer trans ${className}`}>
        <div className={`transfer-icon icon ${className}`}>
          {' '}
          <i className='fa-solid fa-paper-plane' />{' '}
        </div>
        <div className={`transfer-text text ${className}`}>Transfer</div>
      </div>
    </div>
  );
}

export default Transactions;

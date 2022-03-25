import React, { useState } from 'react';
import Deposit from './Deposit';
import Transfer from './Transfer';
import Withdraw from './Withdraw';

function Transactions({ className = '', ACCOUNTNUMBER }) {
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);

  const handleShowDeposit = () => {
    setShowDeposit(true);
  };

  const handleShowWithdraw = () => {
    setShowWithdraw(true);
  };

  const handleShowTransfer = () => {
    setShowTransfer(true);
  };

  return (
    <div className={`transactions ${className}`}>
      <div onClick={handleShowDeposit} className={`deposit trans ${className}`}>
        <div className={`deposit-icon icon ${className}`}>
          <i className='fa-solid fa-money-bill-1-wave'></i>
        </div>
        <div className={`deposit-text text ${className}`}>Deposit</div>
      </div>
      <div
        onClick={handleShowWithdraw}
        className={`withdraw trans ${className}`}
      >
        <div className={`withdraw-icon icon ${className}`}>
          <i className='fa-solid fa-hand-holding-dollar'></i>
        </div>
        <div className={`withdraw-text text ${className}`}>Withdraw</div>
      </div>
      <div
        onClick={handleShowTransfer}
        className={`transfer trans ${className}`}
      >
        <div className={`transfer-icon icon ${className}`}>
          <i className='fa-solid fa-paper-plane' />
        </div>
        <div className={`transfer-text text ${className}`}>Transfer</div>
      </div>
      <Deposit
        className={`deposit-page ${showDeposit ? 'show-deposit' : ''}`}
        setShowDeposit={setShowDeposit}
        ACCOUNTNUMBER={ACCOUNTNUMBER}
      />
      <Withdraw
        className={`withdraw-page ${showWithdraw ? 'show-withdraw' : ''}`}
        setShowWithdraw={setShowWithdraw}
        ACCOUNTNUMBER={ACCOUNTNUMBER}
      />
      <Transfer
        className={`transfer-page ${showTransfer ? 'show-transfer' : ''}`}
        setShowTransfer={setShowTransfer}
        ACCOUNTNUMBER={ACCOUNTNUMBER}
      />
    </div>
  );
}

export default Transactions;

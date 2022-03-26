import React, { Children, useState } from 'react';
import Deposit from './Deposit';
import Transfer from './Transfer';
import Withdraw from './Withdraw';
import Modal from './Modal';
import TransactionMessage from './TransactionMessage';

function Transactions({ className = '', accountNumber }) {
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className={`transactions ${className}`}>
      <div
        onClick={() => setShowDeposit(true)}
        className={`deposit trans ${className}`}
      >
        <div className={`deposit-icon icon ${className}`}>
          <i className='fa-solid fa-money-bill-1-wave'></i>
        </div>
        <div className={`deposit-text text ${className}`}>Deposit</div>
      </div>
      <div
        onClick={() => setShowWithdraw(true)}
        className={`withdraw trans ${className}`}
      >
        <div className={`withdraw-icon icon ${className}`}>
          <i className='fa-solid fa-hand-holding-dollar'></i>
        </div>
        <div className={`withdraw-text text ${className}`}>Withdraw</div>
      </div>
      <div
        onClick={() => setShowTransfer(true)}
        className={`transfer trans ${className}`}
      >
        <div className={`transfer-icon icon ${className}`}>
          <i className='fa-solid fa-paper-plane' />
        </div>
        <div className={`transfer-text text ${className}`}>Transfer</div>
      </div>
      <Modal open={showDeposit} setIsOpen={setShowDeposit}>
        <Deposit
          setShowDeposit={setShowDeposit}
          setShowMessage={setShowMessage}
          accountNumber={accountNumber}
        />
      </Modal>
      <Modal open={showWithdraw} setIsOpen={setShowWithdraw}>
        <Withdraw
          setShowWithdraw={setShowWithdraw}
          setShowMessage={setShowMessage}
          accountNumber={accountNumber}
        />
      </Modal>
      <Modal open={showTransfer} setIsOpen={setShowTransfer}>
        <Transfer
          setShowTransfer={setShowTransfer}
          setShowMessage={setShowMessage}
          accountNumber={accountNumber}
        />
      </Modal>
      <Modal open={showMessage} setIsOpen={setShowMessage}>
        <TransactionMessage setShowMessage={setShowMessage} />
      </Modal>
    </div>
  );
}

export default Transactions;

import React from 'react';
import Transactions from './Transactions';
import LoginPage from './LoginPage';
import Deposit from './transaction-page/Deposit';
import Withdraw from './transaction-page/Withdraw';
import Transfer from './transaction-page/Transfer';
import BudgetApp from './budget-app/BudgetApp';

function UserPage({
  setIsAdmin,
  setLoggedIn,
  fullName,
  balance,
  accountNumber,
  accounts,
  setAccounts,
  setUserInput,
  setPassInput,
  isAdmin,
}) {
  const name = fullName.split(',');

  const logOut = () => {
    setIsAdmin(false);
    setLoggedIn(false);
    setUserInput('');
    setPassInput('');
  };

  function showBudgetApp() {
    document.querySelector('.top-bar').classList.add('hide');
    document.querySelector('.card-container').classList.add('hide');
    document.querySelector('.transactions').classList.add('hide');
    document.querySelector('.manage-payments').classList.add('hide');
  }

  return (
    <div className='third-page'>
      <header>
        <div className='dashboard'>
          Dashboard
          {/* <div className="notification"><i className="fa-solid fa-bell"></i></div> */}
          <i
            onClick={logOut}
            className='fa-solid fa-arrow-right-from-bracket'
          ></i>
        </div>
      </header>
      <div className='top-bar'>
        <div className='greeting'>
          Welcome back, <span>{name[1]}</span>!
        </div>
        <div className='avatar'>
          <i className='fa-solid fa-user-tie'></i>
        </div>
      </div>

      <div className='card-container'>
        <div className='card'>
          <div className='card-logo'>
            <div className='second-icon'>
              <i className='fa-brands fa-react'></i>
            </div>
            <div className='logo-name'>
              React<span>Bank</span>
            </div>
          </div>
          <div className='card-design'>
            <div className='chip'>
              <div className='chip-cell-1'></div>
              <div className='chip-cell-2'></div>
              <div className='chip-cell-3'></div>
              <div className='chip-cell-4'></div>
              <div className='chip-cell-5'></div>
              <div className='chip-cell-6'></div>
              <div className='chip-cell-7'></div>
              <div className='chip-cell-8'></div>
              <div className='chip-cell-9'></div>
            </div>
            <div className='wifi'>
              <i className='fa-solid fa-wifi'></i>
            </div>
          </div>
          <div className='card-name'>{`${name[1]}  ${name[0]}`}</div>
          <div className='card-number'>{accountNumber}</div>
        </div>
      </div>

      <div onClick={showBudgetApp} className='manage-payments'>
        Manage Payments
      </div>

      {/* <div className='user-transactions'> */}
      <Transactions isAdmin={isAdmin} />
      <Deposit
        accounts={accounts}
        setAccounts={setAccounts}
        accountNumber={accountNumber}
        isAdmin={isAdmin}
      />
      <Withdraw
        accounts={accounts}
        setAccounts={setAccounts}
        accountNumber={accountNumber}
        isAdmin={isAdmin}
      />
      <Transfer
        accounts={accounts}
        setAccounts={setAccounts}
        accountNumber={accountNumber}
        isAdmin={isAdmin}
      />
      {/* </div> */}

      <BudgetApp />
      
      <div className='bottom-nav'>
        <div className='nav-text'>Available Balance</div>
        <div className='balance'>PHP {balance}</div>
      </div>
    </div>
  );
}

export default UserPage;

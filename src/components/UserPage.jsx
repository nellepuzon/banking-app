import React from 'react';
import Transactions from './admin-page/Transactions';
import LoginPage from './LoginPage';
import Deposit from './transaction-page/Deposit';

function UserPage({ setIsAdmin, setLoggedIn }) {
    const logOut = () => {
      setIsAdmin(false);
      setLoggedIn(false);
    };

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
          Welcome back, <span>Eg!</span>
        </div>
        <div className='avatar'></div>
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
          <div className='card-name'>Eglecerio Malunes III</div>
          <div className='card-number'>1234 5678 9123 4567</div>
        </div>

        <Transactions/>
            {/* <Deposit accounts={props.accounts} setAccounts={props.setAccounts}/>
            <Withdraw accounts={props.accounts} setAccounts={props.setAccounts}/>
            <Transfer accounts={props.accounts} setAccounts={props.setAccounts}/> */}


        <div className='bottom-nav'>
          <div className='nav-text'>Available Balance</div>
          <div className='balance'>PHP 345,388.00</div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;

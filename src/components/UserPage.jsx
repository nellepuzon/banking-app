import React from 'react';
import LoginPage from './LoginPage';

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

        <div className='transaction'>
          <div className='send-money trans'>
            <div className='send-money-icon icon'>
              <i className='fa-solid fa-money-bill-1-wave'></i>
            </div>
            <div className='send-money-text text'>Send Money</div>
          </div>

          <div className='receive-money trans'>
            <div className='receive-money-icon icon'>
              <i className='fa-solid fa-wallet'></i>
            </div>
            <div className='receive-money-text text'>Receive Money</div>
          </div>

          <div className='pay-bills trans'>
            <div className='pay-bills-icon icon'>
              <i className='fa-solid fa-file-invoice-dollar'></i>
            </div>
            <div className='pay-bills-text text'>Pay Bills</div>
          </div>

          <div className='buy-load trans'>
            <div className='buy-load-icon icon'>
              <i className='fa-solid fa-mobile-screen-button'></i>
            </div>
            <div className='buy-load-text text'>Buy Load</div>
          </div>
        </div>

        <div className='bottom-nav'>
          <div className='nav-text'>Available Balance</div>
          <div className='balance'>PHP 345,388.00</div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;

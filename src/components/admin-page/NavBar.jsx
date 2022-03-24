import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import BankLogo from '../login-page/BankLogo';

function NavBar() {
  const { adminLogin } = useContext(DataContext);

  return (
    <div className='admin-dashboard'>
      <div className='nav-bar'>
        <BankLogo />
        <ul>
          <li>Manage Accounts</li>
          <li>Transactions</li>
          <li>
            <i
              className='fa-solid fa-right-from-bracket dashboard-icon'
              onClick={() => {
                adminLogin(false);
              }}
            ></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

import React from 'react';
import App from '../../App';
import LoginPage from '../LoginPage';


function NavBar({ searchInput, setSearchInput, setIsAdmin, setLoggedIn }) {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const logOut = () => {
    setIsAdmin(false);
    setLoggedIn(false);
  };

  return (
    <div className='admin-dashboard'>
      <div className='nav-bar'>
        <div className='accounts'>Accounts</div>
        <div className='sort-icon'>
          <i className='fa-solid fa-arrow-up-a-z dashboard-icon'></i>
          <i className='fa-solid fa-arrow-down-a-z dashboard-icon'></i>

          <i
            className='fa-solid fa-right-from-bracket dashboard-icon'
            onClick={logOut}
          ></i>
        </div>
      </div>
      <i className='fa-solid fa-magnifying-glass'></i>
      <input className='search' type='text' onChange={handleChange}></input>
    </div>
  );
}

export default NavBar;

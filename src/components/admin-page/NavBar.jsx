import React from 'react';
import App from '../../App';
import LoginPage from '../LoginPage';

function NavBar({
  setSearchInput,
  setIsAdmin,
  setLoggedIn,
  setUserInput,
  setPassInput,
}) {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const logOut = () => {
    setIsAdmin(false);
    setLoggedIn(false);
    setUserInput('');
    setPassInput('');
  };

  return (
    <div className='admin-dashboard'>
      <div className='nav-bar'>
        <div className='accounts'>Accounts</div>
        <div className='sort-icon'>
          <i
            className='fa-solid fa-right-from-bracket dashboard-icon'
            onClick={logOut}
          ></i>
        </div>
      </div>
      {/* <i className='fa-solid fa-magnifying-glass'></i> */}
      <input
        className='search'
        type='text'
        placeholder='Search'
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default NavBar;

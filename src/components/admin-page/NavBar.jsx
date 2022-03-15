import React from 'react';

function NavBar() {
  return (
    <div className='admin-dashboard'>
      <div className='nav-bar'>
        <div className='accounts'>Accounts</div>
        <div className='sort-icon'>
          <i className='fa-solid fa-arrow-up-a-z dashboard-icon'></i>
          <i className='fa-solid fa-arrow-down-a-z dashboard-icon'></i>
          <i className='fa-solid fa-right-from-bracket dashboard-icon'></i>
        </div>
      </div>
      <i className='fa-solid fa-magnifying-glass'></i>
      <input className='search' type='text'></input>
    </div>
  );
}

export default NavBar;

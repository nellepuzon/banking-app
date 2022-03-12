import React from 'react';


function NavBar() {
  return (
    <div className='admin-dashboard'>
      <div className='nav-bar'>
        <div className='accounts'>Accounts</div>
        <div className='sort-up'>
          <i className='fa-solid fa-arrow-up-a-z'></i>
        </div>
        <div className='sort-down'>
          <i className='fa-solid fa-arrow-down-a-z'></i>
        </div>
      </div>
      <i className='fa-solid fa-magnifying-glass'></i>
      <input className='search'></input>
    </div>
  );
}

export default NavBar;

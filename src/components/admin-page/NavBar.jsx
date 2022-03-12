import React from 'react';


function NavBar() {
  return (
    <div class='admin-dashboard'>
      <div class='nav-bar'>
        <div class='accounts'>Accounts</div>
        <div class='sort-up'>
          <i class='fa-solid fa-arrow-up-a-z'></i>
        </div>
        <div class='sort-down'>
          <i class='fa-solid fa-arrow-down-a-z'></i>
        </div>
      </div>
      <i class='fa-solid fa-magnifying-glass'></i>
      <input class='search'></input>
    </div>
  );
}

export default NavBar;

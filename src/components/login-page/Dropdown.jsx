import React from 'react';

// function Admin() {
//     return (
//         <div className="admin-option">Admin</div>
//     )
// }

// function User() {
//     return (
//         <div className="user-option">User</div>
//     )
// }

function Dropdown() {
  const showDropdownContent = () => {
    return document.querySelector('.dropdown-content').classList.toggle('show');
  };

  const showUserPage = () => {
    return (
      document.querySelector('.user-page').classList.add('show-login'),
      document.querySelector('.dropdown').classList.add('hide')
    );
  };

  const showAdminPage = () => {
    return (
      document.querySelector('.admin-page').classList.add('show-login'),
      document.querySelector('.dropdown').classList.add('hide')
    );
  };
  return (
    <div className='dropdown-container'>
      <div className='dropdown'>
        <button onClick={showDropdownContent} className='dropdown-button'>
          Account Type <i className='fa-solid fa-caret-down'></i>
        </button>
        <div className='dropdown-content'>
          <div onClick={showAdminPage} className='admin-option'>
            Admin
          </div>
          <div onClick={showUserPage} className='user-option'>
            User
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;

import React from 'react';

function AdminLogin() {
  const goBack = () => {
    return (
      document.querySelector('.admin-page').classList.remove('show-login'),
      document.querySelector('.dropdown').classList.remove('hide'),
      document.querySelector('.dropdown-content').classList.remove('show')
    );
  };

  return (
    <div className='admin-page'>
      <div className='login'>
        <input type='password' placeholder='Password' />
        <button className='login-button'>LOG IN</button>
        <div onClick={goBack} className='back-button'>
          Back
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;

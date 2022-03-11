import React from 'react';

function UserLogin() {

  const goBack = () => {
    return document.querySelector(".user-page").classList.remove("show-login"),
    document.querySelector(".dropdown").classList.remove("hide")
  }
  
  return (
    <div className='user-page'>
      <div className='login'>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button className='login-button'>LOG IN</button>
        <div className='forgot-password'>Forgot Password</div>
        <div className='create-account'>Create Account</div>
        <div onClick={goBack} className="back-button">Back</div>
      </div>
    </div>
  );
}

export default UserLogin;

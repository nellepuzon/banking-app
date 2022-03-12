import React, { useState } from 'react';
import BankLogo from './login-page/BankLogo';
//import Dropdown from './login-page/Dropdown';
import UserLogin from './login-page/UserLogin';
//import AdminLogin from './login-page/AdminLogin';

function LoginPage(props) {
  return (
    <div className='first-page'>
      <BankLogo />
      <UserLogin
        isAdmin={props.isAdmin}
        setIsAdmin={props.setIsAdmin}
        accounts={props.accounts}
        loggedIn={props.loggedIn}
        setLoggedIn={props.setLoggedIn}
      />
    </div>
  );
}

export default LoginPage;

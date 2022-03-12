import React, { useState } from 'react';
import BankLogo from './login-page/BankLogo';
import Dropdown from './login-page/Dropdown';
import UserLogin from './login-page/UserLogin';
import AdminLogin from './login-page/AdminLogin';

function LoginPage(props) {
  return (
    <div className='first-page'>
      <BankLogo />
      <Dropdown />
      <UserLogin
        accounts={props.accounts}
        loggedIn={props.loggedIn}
        setLoggedIn={props.setLoggedIn}
      />
      <AdminLogin
        loggedIn={props.loggedIn}
        setLoggedIn={props.setLoggedIn}
        adminPassword={props.adminPassword}
      />
    </div>
  );
}

export default LoginPage;

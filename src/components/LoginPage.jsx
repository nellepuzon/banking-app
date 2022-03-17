import React, { useState } from 'react';
import BankLogo from './login-page/BankLogo';
//import Dropdown from './login-page/Dropdown';
import UserLogin from './login-page/UserLogin';
//import AdminLogin from './login-page/AdminLogin';
import Slogan from './login-page/DesktopLogin';
import DesktopLogin from './login-page/DesktopLogin';

function LoginPage(props) {
  return (
    <div className='first-page'>
      <DesktopLogin />
      <BankLogo />
      <UserLogin
        isAdmin={props.isAdmin}
        setIsAdmin={props.setIsAdmin}
        accounts={props.accounts}
        loggedIn={props.loggedIn}
        setLoggedIn={props.setLoggedIn}
        userInput={props.userInput}
        setUserInput={props.setUserInput}
        passInput={props.passInput}
        setPassInput={props.setPassInput}
      />
    </div>
  );
}

export default LoginPage;

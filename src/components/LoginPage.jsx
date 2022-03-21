import React, { useState } from 'react';
import BankLogo from './login-page/BankLogo';
//import Dropdown from './login-page/Dropdown';
import UserLogin from './login-page/UserLogin';
//import AdminLogin from './login-page/AdminLogin';
import Slogan from './login-page/DesktopLogin';
import DesktopLogin from './login-page/DesktopLogin';

function LoginPage() {
  return (
    <div className='first-page'>
      <DesktopLogin />
      <BankLogo />
      <UserLogin />
    </div>
  );
}

export default LoginPage;

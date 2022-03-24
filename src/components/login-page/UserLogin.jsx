import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import BankLogo from './BankLogo';

function UserLogin() {
  const {
    accounts,
    loggedIn,
    userLogin,
    adminLogin,
    userInput,
    onUserInput,
    passInput,
    onPassInput,
    resetLogin,
  } = useContext(DataContext);
  const [errorMessage, setErrorMessage] = useState({});
  const navigate = useNavigate();

  function handleSubmit() {
    const user = accounts.find((account) => userInput === account.userName);

    if (user) {
      if (user.password !== passInput) {
        setErrorMessage({
          placeholder: 'Password',
          message: 'invalid password',
        });
      } else if (user.type === 'admin') {
        adminLogin(true);
        navigate('/admin');
        resetLogin();
      } else if (user.type === 'user') {
        userLogin(true);
        navigate(`/user/${userInput}`);
        resetLogin();
      }
    } else {
      setErrorMessage({ placeholder: 'Username', message: 'invalid username' });
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  function renderError(placeholder) {
    if (placeholder === errorMessage.placeholder && !loggedIn) {
      return <div className='error-message'>{errorMessage.message}</div>;
    }
  }

  return (
    <div className='user-page'>
      <BankLogo className='mobile' />
      <div className='login'>
        <input
          type='text'
          placeholder='Username'
          required
          onChange={(e) => {
            onUserInput(e.target.value);
          }}
          value={userInput}
          spellCheck='false'
          onKeyPress={handleKeyPress}
        />
        {renderError('Username')}
        <input
          type='password'
          placeholder='Password'
          required
          onChange={(e) => {
            onPassInput(e.target.value);
          }}
          value={passInput}
          onKeyPress={handleKeyPress}
        />
        {renderError('Password')}
        <button className='login-button' onClick={handleSubmit}>
          LOG IN
        </button>

        <div className='login-options'>
          <div className='forgot-password'>Forgot Password</div>
          <div className='create-account'>Create Account</div>
        </div>

        <div className='login-footer'>
          <div className='terms'>Terms and Conditions</div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;

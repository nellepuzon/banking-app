import React, { useState } from 'react';

function UserLogin({
  accounts,
  loggedIn,
  setLoggedIn,
  isAdmin,
  setIsAdmin,
  userInput,
  setUserInput,
  passInput,
  setPassInput,
}) {
  const [errorMessage, setErrorMessage] = useState({});
  // const [userInput, setUserInput] = useState('');
  // const [passInput, setPassInput] = useState('');

  function userChangeHandler(e) {
    setUserInput(e.target.value);
  }

  function passChangeHandler(e) {
    setPassInput(e.target.value);
  }

  function handleSubmit(e) {

    const user = accounts.find((account) => userInput === account.userName);

    if (user) {
      if (user.password !== passInput) {
        setErrorMessage({
          placeholder: 'Password',
          message: 'invalid password',
        });
      } else if (user.type === 'admin') {
        setIsAdmin(true);
        setLoggedIn(true);
      } else if (user.type === 'user') {
        setLoggedIn(true);
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
      <div className='login'>
        {/* <input type='text' placeholder='Username' spellCheck="false"/>
        <input type='password' placeholder='Password' />
        <button className='login-button'>LOG IN</button> */}

        <input
          type='text'
          placeholder='Username'
          required
          onChange={userChangeHandler}
          value={userInput}
          spellCheck='false'
          onKeyPress={handleKeyPress}
        />
        {renderError('Username')}
        <input
          type='password'
          placeholder='Password'
          required
          onChange={passChangeHandler}
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
      </div>
    </div>
  );
}

export default UserLogin;

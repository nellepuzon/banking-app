import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function UserLogin({
  accounts,
  loggedIn,
  setLoggedIn,
  setIsAdmin,
  userInput,
  setUserInput,
  passInput,
  setPassInput,
}) {
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
        setIsAdmin(true);
        setLoggedIn(true);
        navigate('/admin')
      } else if (user.type === 'user') {
        setLoggedIn(true);
        navigate('/user')
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
        <input
          type='text'
          placeholder='Username'
          required
          onChange={(e)=>{setUserInput(e.target.value)}}
          value={userInput}
          spellCheck='false'
          onKeyPress={handleKeyPress}
        />
        {renderError('Username')}
        <input
          type='password'
          placeholder='Password'
          required
          onChange={(e)=>{setPassInput(e.target.value)}}
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

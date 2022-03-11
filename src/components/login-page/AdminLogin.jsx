import React, {useState} from 'react';

function AdminLogin({adminPassword, loggedIn, setLoggedIn}) {
  const [errorMessage, setErrorMessage] = useState({})
  const [passwordInput, setPasswordInput] = useState("")
  
  function handleChange(e) {
    setPasswordInput(e.target.value)
  }

  function handleClick(e) {
    e.preventDefault()
    if (passwordInput !== adminPassword) {
      setErrorMessage({message: 'invalid password'})
    } else {
      setLoggedIn(true)
    }
    setPasswordInput("")
  }

  function renderError() {
    if(errorMessage && !loggedIn) {
      return <div className='error-message'>{errorMessage.message}</div>
    }
  }

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
        <input type='password' value={passwordInput} placeholder='Password' name="adminPass" required onChange={handleChange} />
        {renderError()}
        <button className='login-button' onClick={handleClick}>LOG IN</button>
        <div onClick={goBack} className='back-button'>
          Back
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;

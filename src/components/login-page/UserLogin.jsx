import React,{useState} from 'react';

function UserLogin({accounts, loggedIn, setLoggedIn, isAdmin, setIsAdmin}) {
  const [errorMessage, setErrorMessage] = useState({})
  const [userInput, setUserInput] = useState("")
  const [passInput, setPassInput] = useState("")

  function userChangeHandler(e) {
    setUserInput(e.target.value)
  }

  function passChangeHandler(e) {
    setPassInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const user = accounts.find((account) => userInput === account.userName)

    if(user) {
      if (user.password !== passInput) {
        setErrorMessage({placeholder:'Password', message: 'invalid password'})
      } else if(user.type === "admin") {
        setIsAdmin(true)
        setLoggedIn(true)
        setUserInput("")
        setPassInput("")
        console.log(user.type)
      } else if(user.type ==="user") {
        setLoggedIn(true)
        setUserInput("")
        setPassInput("")
        console.log(user.type)
      }
    } else {
      setErrorMessage({placeholder:'Username',message: 'invalid username'})
    }
    
  }

  function renderError(placeholder) {
    if(placeholder === errorMessage.placeholder && !loggedIn) {
      return <div className='error-message'>{errorMessage.message}</div>
    }
  }

  const goBack = () => {
    return (
      document.querySelector('.user-page').classList.remove('show-login'),
      document.querySelector('.dropdown').classList.remove('hide'),
      document.querySelector('.dropdown-content').classList.remove('show')

    );
  };

  return (
    <div className='user-page'>
      <div className='login'>

        {/* <input type='text' placeholder='Username' spellCheck="false"/>
        <input type='password' placeholder='Password' />
        <button className='login-button'>LOG IN</button> */}

        <input type='text' placeholder='Username' required onChange={userChangeHandler} value={userInput} spellCheck="false"/>
        {renderError('Username')}
        <input type='password' placeholder='Password' required onChange={passChangeHandler} value={passInput}/>
        {renderError('Password')}
        <button className='login-button' onClick={handleSubmit}>LOG IN</button>

        <div className='forgot-password'>Forgot Password</div>
        <div className='create-account'>Create Account</div>
        <div onClick={goBack} className='back-button'>
          Back
        </div>
      </div>
    </div>
  );
}

export default UserLogin;

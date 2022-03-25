import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BankLogo from "./BankLogo";
import loginCheckInput from "../../helpers/loginCheckInput";
import ErrorMessage from "../../helpers/ErrorMessage";
import useDataContext from "../../hooks/useDataContext";

function UserLogin() {
  const { accounts, userLogin, adminLogin } = useDataContext()
  const [userInput, setUserInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const user = accounts.find((account) => userInput === account.userName);
  const navigate = useNavigate();

  let errorType = loginCheckInput(user, passInput);

  const resetError = () => {
    setErrorMessage('');
    setSubmitted(false);
  };

  const handleErrorChange = (value) => {
    setErrorMessage(value);
  };


  const resetLogin = () => {
    setUserInput("");
    setPassInput("");
  };

  function handleSubmit() {
    setSubmitted(true)
    if (errorType === null) {
      if (user.type === "admin") {
        setSubmitted(false)
        adminLogin(true);
        navigate("/admin");
        resetLogin();
      } else if (user.type === "user") {
        setSubmitted(false)
        userLogin(true);
        navigate(`/user/${userInput}`);
        resetLogin();
      }
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="user-page">
      <BankLogo className="mobile" />
      <div className="login">
        <input
          type="text"
          placeholder="Username"
          required
          onChange={(e) => {
            setUserInput(e.target.value);
            resetError();
          }}
          value={userInput}
          spellCheck="false"
          onKeyPress={handleKeyPress}
        />
         {(submitted && errorType === 5) && (
            <ErrorMessage
              errorType={errorType}
              errorMessage={errorMessage}
              onErrorChange={handleErrorChange}
            />
          )}
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => {
            setPassInput(e.target.value);
            resetError();
          }}
          value={passInput}
          onKeyPress={handleKeyPress}
        />
         {(submitted && errorType === 6) && (
            <ErrorMessage
              errorType={errorType}
              errorMessage={errorMessage}
              onErrorChange={handleErrorChange}
            />
          )}
        <button className="login-button" onClick={handleSubmit}>
          LOG IN
        </button>

        <div className="login-options">
          <div className="forgot-password">Forgot Password</div>
          <div className="create-account">Create Account</div>
        </div>

        <div className="login-footer">
          <div className="terms">Terms and Conditions</div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;

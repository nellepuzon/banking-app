import React, { useState } from 'react';

function AddAccount({
  setAccounts,
  accounts,
  fullName,
  setFullName,
  balance,
  setBalance,
  userName,
  setUserName,
  password,
  setPassword,
  isEditing,
  setIsEditing,
  editingID,
}) {
  // const [fullName, setFullName] = useState('')
  // const [balance, setBalance] = useState('')
  // const [userName, setUserName] = useState('')
  // const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleBalance = (e) => {
    setBalance(e.target.value);
  };

  const handleUsername = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const editUser = (id) => {
    const selectedUser = accounts.find((user) => user.accountNumber === id);
    selectedUser.userName = userName;
    selectedUser.fullName = fullName;
    selectedUser.password = password;
    selectedUser.money = balance;
    const updatedUsers = accounts.map((user) =>
      user.id === id ? { ...selectedUser } : user
    );
    setAccounts(updatedUsers);
    localStorage.setItem('accounts', JSON.stringify([...updatedUsers]));
    setFullName('');
    setUserName('');
    setPassword('');
    setBalance('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddAccount();
    }
  };

  const handleAddAccount = (e) => {
    // e.preventDefault();
    const userNameMatch = accounts.find(
      (element) => element.userName === userName
    );
    const fullNameMatch = accounts.find(
      (element) => element.fullName === fullName
    );

    if (isEditing) {
      editUser(editingID);
      setIsEditing(false);
      return;
    }

    if (
      userNameMatch &&
      !fullNameMatch &&
      fullName !== '' &&
      userName !== '' &&
      password !== '' &&
      balance !== ''
    ) {
      setErrorMessage({ message: 'username already exists' });
    } else if (
      fullNameMatch &&
      !userNameMatch &&
      fullName !== '' &&
      userName !== '' &&
      password !== '' &&
      balance !== ''
    ) {
      setErrorMessage({ message: 'full name already exists' });
    } else if (
      userNameMatch &&
      fullNameMatch &&
      fullName !== '' &&
      userName !== '' &&
      password !== '' &&
      balance !== ''
    ) {
      setErrorMessage({ message: 'account already exists' });
    } else if (
      fullName !== '' &&
      balance !== '' &&
      !userNameMatch &&
      !fullNameMatch
    ) {
      let test = Math.floor(Math.random() * 100000000);
      setAccounts([
        ...accounts,
        {
          userName: userName,
          password: password,
          type: 'user',
          fullName: fullName,
          money: balance,
          accountNumber: test,
        },
      ]);
      // localStorage.setItem("accounts", JSON.stringify([...accounts, { userName: userName, password: password, type: 'user', fullName: fullName, money: balance, accountNumber: test }]))
      setFullName('');
      setBalance('');
      setUserName('');
      setPassword('');
      setErrorMessage('');
    } else {
      setErrorMessage({ message: 'fill out necessary information' });
    }
  };

  const renderError = () => {
    if (errorMessage) {
      return <div className='error-message'>{errorMessage.message}</div>;
    }
  };
  return (
    <div className='add-account-container'>
      {renderError()}
      <div className='add-account-inputs'>
        <input
          className='input-username'
          type='text'
          placeholder='Username'
          value={userName}
          onChange={handleUsername}
          onKeyPress={handleKeyPress}
        ></input>
        <input
          className='input-password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePassword}
          onKeyPress={handleKeyPress}
        ></input>
      </div>
      <div className='add-account-inputs'>
        <input
          className='input-fullname'
          type='text'
          placeholder='Full Name'
          spellCheck='false'
          value={fullName}
          onChange={handleFullName}
          onKeyPress={handleKeyPress}
        ></input>
        <input
          className='input-balance'
          type='number'
          placeholder='Initial Balance'
          value={balance}
          onChange={handleBalance}
          onKeyPress={handleKeyPress}
        ></input>
      </div>
      <button onClick={handleAddAccount} className='add-account-button'>
        Add Account
      </button>
    </div>
  );
}

export default AddAccount;

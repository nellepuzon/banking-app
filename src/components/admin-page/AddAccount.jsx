import React, { useState, useContext } from 'react';
import DataContext from '../../context/DataContext';
import AdminContext from '../../context/AdminDataContext';
import adminInputCheck from '../../helpers/adminInputCheck';
import ErrorMessage from '../../helpers/ErrorMessage';

function AddAccount() {
  const { accounts, updateAccounts } = useContext(DataContext);
  const {
    fullName,
    balance,
    userName,
    password,
    isEditing,
    editingID,
    changeFullNameInput,
    changeBalanceInput,
    changeUserNameInput,
    changePasswordInput,
    changeEditState,
    resetInputs,
  } = useContext(AdminContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const userNameMatch = accounts.find(
    (element) => element.userName === userName
  );
  const fullNameMatch = accounts.find(
    (element) => element.fullName === fullName
  );
  let errorType = adminInputCheck(
    userNameMatch,
    fullNameMatch,
    fullName,
    userName,
    password,
    balance
  );

  let id = Math.floor(Math.random() * (100000000 - 10000000)) + 10000000;
  const newAccount = {
    userName: userName,
    password: password,
    type: 'user',
    fullName: fullName,
    money: balance,
    accountNumber: id,
    userExpenses: 0,
    expense: [],
    history: [],
  };

  const handleErrorChange = (value) => {
    setErrorMessage(value);
  };

  const resetError = () => {
    setErrorMessage('');
    setSubmitted(false);
  };

  const editUser = (id) => {
    const selectedUser = accounts.find((user) => user.accountNumber === id);
    selectedUser.userName = userName;
    selectedUser.fullName = fullName;
    selectedUser.password = password;
    selectedUser.money = balance;
    const updatedUsers = accounts.map((user) =>
      user.accountNumber === id ? { ...selectedUser } : user
    );
    updateAccounts(updatedUsers);
    resetInputs();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddAccount();
    }
  };

  const handleAddAccount = (e) => {
    setSubmitted(true);

    if (isEditing) {
      editUser(editingID);
      changeEditState(false);
      resetError();
      return;
    } else if (errorType === 20) {
      updateAccounts([...accounts, newAccount]);
      resetInputs();
      resetError();
    }
  };

  return (
    <div className='add-account-container'>
      <div className='error'>
        {submitted && (
          <ErrorMessage
            errorType={errorType}
            errorMessage={errorMessage}
            onErrorChange={handleErrorChange}
          />
        )}
      </div>
      <div className='inputs'>
        <div className='add-account-inputs'>
          <input
            className='input-username'
            type='text'
            placeholder='Username'
            value={userName}
            onChange={(e) => {
              changeUserNameInput(e.target.value);
              resetError();
            }}
            onKeyPress={handleKeyPress}
          ></input>
          <input
            className='input-password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              changePasswordInput(e.target.value);
              resetError();
            }}
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
            onChange={(e) => {
              changeFullNameInput(e.target.value);
              resetError();
            }}
            onKeyPress={handleKeyPress}
          ></input>
          <input
            className='input-balance'
            type='number'
            placeholder='Initial Balance'
            value={balance}
            onChange={(e) => {
              changeBalanceInput(e.target.value);
              resetError();
            }}
            onKeyPress={handleKeyPress}
          ></input>
        </div>
        <div className='add-account-inputs'>
          <button onClick={handleAddAccount} className='add-account-button'>
            {isEditing ? 'Update' : 'Add'} Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAccount;

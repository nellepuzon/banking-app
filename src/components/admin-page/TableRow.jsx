import React from 'react';

function TableRow({
  account,
  setAccounts,
  accounts,
  setFullName,
  setBalance,
  setUserName,
  setPassword,
  setEditingID,
  setIsEditing,
}) {
  const handleDelete = (id) => {
    const newUsers = accounts.filter((user) => user.accountNumber !== id);
    setAccounts(newUsers);
    // localStorage.setItem('accounts', JSON.stringify([...newUsers]));
  };

  const handleEdit = (id) => {
    setEditingID(id);
    setIsEditing(true);
    const selectedUser = accounts.find((user) => user.accountNumber === id);
    setFullName(selectedUser.fullName);
    setBalance(selectedUser.money);
    setUserName(selectedUser.userName);
    setPassword(selectedUser.password);
  };

  return (
    <tr>
      <td>
        <a href='#'>{account.accountNumber}</a>
      </td>
      <td>
        <a id='account-name' href='#'>
          {account.fullName}
        </a>
      </td>
      <td>
        <i className='fa-solid fa-peso-sign'></i> {account.money}
      </td>
      <div className='edit-delete'>
        <i
          className='fa-solid fa-pen-to-square edit-button'
          onClick={() => {
            handleEdit(account.accountNumber);
          }}
        ></i>
        <i
          className='fa-solid fa-trash-can delete-button'
          onClick={() => {
            handleDelete(account.accountNumber);
          }}
        ></i>
      </div>
    </tr>
  );
}

export default TableRow;

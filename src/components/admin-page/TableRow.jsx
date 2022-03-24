import React, { useContext } from 'react';
import AdminContext from '../../context/AdminDataContext';
import DataContext from '../../context/DataContext';

function TableRow({ account }) {
  const { accounts, updateAccounts } = useContext(DataContext);
  const { onEdit } = useContext(AdminContext);
  const handleDelete = (id) => {
    const newUsers = accounts.filter((user) => user.accountNumber !== id);
    updateAccounts(newUsers);
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
            onEdit(account.accountNumber, accounts);
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

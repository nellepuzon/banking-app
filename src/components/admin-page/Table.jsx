import React, {useContext} from 'react';
import TableRow from './TableRow';
import DataContext from '../../context/DataContext';

function Table({
  searchInput,
  setFullName,
  setBalance,
  setUserName,
  setPassword,
  setEditingID,
  setIsEditing,
}) {
  const {accounts} = useContext(DataContext)
  return (
    <div className='table-box'>
      <table>
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Name</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts
            .filter((item) => {
              if (
                searchInput === '' ||
                (item.fullName &&
                  item.fullName
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()))
              ) {
                return item;
              }
            })
            .map((account) => {
              if (account.type !== 'admin') {
                return (
                  <TableRow
                    key={account.accountNumber}
                    account={account}
                    setFullName={setFullName}
                    setBalance={setBalance}
                    setUserName={setUserName}
                    setPassword={setPassword}
                    setEditingID={setEditingID}
                    setIsEditing={setIsEditing}
                  />
                );
              }
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

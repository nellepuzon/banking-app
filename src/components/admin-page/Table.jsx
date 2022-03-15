import React from 'react';
import TableRow from './TableRow';

function Table({accounts, searchInput, setAccounts, setFullName, setBalance, setUserName, setPassword, setEditingID, setIsEditing}) {
  return (
      <div className="table-box">
    <table>
      <thead>
        <tr>
          <th>Account Number</th>
          <th>Name</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
      {accounts.filter((item) => {
        if (searchInput === "") {
          return item
        } else if (item.fullName && item.fullName.toLowerCase().includes(searchInput.toLowerCase())) {
          return item
        }
      }).map(account => {
        if (account.type !== "admin") {
          return <TableRow 
          key={account.accountNumber} 
          account={account} 
          setAccounts={setAccounts} 
          accounts={accounts}
          setFullName={setFullName}
          setBalance={setBalance}
          setUserName={setUserName}
          setPassword={setPassword}
          setEditingID={setEditingID}
          setIsEditing={setIsEditing}
          />
        }
      })}
      </tbody>
    </table>
    </div>
  );
}

export default Table;

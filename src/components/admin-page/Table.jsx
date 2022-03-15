import React from 'react';
import TableRow from './TableRow';

function Table({accounts, searchInput}) {
  return (
      <div className="table-box">
    <table>
      <tr>
        <th>Account Number</th>
        <th>Name</th>
        <th>Balance</th>
      </tr>
      {accounts.filter((item) => {
        if (searchInput === "") {
          return item
        } else if (item.fullName && item.fullName.toLowerCase().includes(searchInput.toLowerCase())) {
          return item
        }
      }).map(account => {
        if (account.type !== "admin") {
          return <TableRow account={account}/>
        }
      })}
    </table>
    </div>
  );
}

export default Table;

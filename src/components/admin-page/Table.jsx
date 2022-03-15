import React from 'react';
import TableRow from './TableRow';

function Table({accounts}) {
  return (
      <div className="table-box">
    <table>
      <tr>
        <th>Account Number</th>
        <th>Name</th>
        <th>Balance</th>
      </tr>
      {accounts.map(account => {
        if (account.type !== "admin") {
          return <TableRow account={account}/>
        }
      })}
    </table>
    </div>
  );
}

export default Table;

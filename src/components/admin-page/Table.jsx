import React from 'react';
import TableRow from './TableRow';

function Table({accounts}) {
  return (
      <div className="table-box">
    <table>
      <tr>
        <th>Name</th>
        <th>Balance</th>
      </tr>
      {accounts.map(account => {
        return <TableRow account={account}/>
      })}
    </table>
    </div>
  );
}

export default Table;

import React from 'react';
import TableRow from './TableRow';

function Table({accounts}) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Balance</th>
      </tr>
      {accounts.map(account => {
        return <TableRow account={account}/>
      })}
    </table>
  );
}

export default Table;

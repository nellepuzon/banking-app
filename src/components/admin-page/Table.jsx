import React from 'react';
import TableRow from './TableRow';
import image from '../../assets/images/bank-img';
import useDataContext from '../../hooks/useDataContext';
import useAdminContext from '../../hooks/useAdminContext';

function Table() {
  const { accounts } = useDataContext()
  const { searchInput } = useAdminContext()
  return (
    <div className='table-box'>
      <img src={image} className='image' />
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Account Number</th>
              <th>Name</th>
              <th>Balance</th>
              <th>Actions</th>
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
                    <TableRow key={account.accountNumber} account={account} />
                  );
                }
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

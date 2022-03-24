import React from 'react';

const TransHistory = ({ item }) => {
  return (
    <li>
      <div className='transaction-name'>{item.type}</div>
      <div className='transaction-code'>{item.id}</div>
    </li>
  );
};

export default TransHistory;

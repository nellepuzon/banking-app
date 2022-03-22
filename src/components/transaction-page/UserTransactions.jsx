import React from 'react';

function UserTransactions({className = ''}) {
  return (
    <div className={`buy-load trans ${className}`}>
      <div className={`buy-load-icon icon ${className}`}>
        <i class='fa-solid fa-mobile-screen-button'></i>
      </div>
      <div className={`buy-load-text text ${className}`}>Buy Load</div>
    </div>
  );
}

export default UserTransactions;

import React from 'react';

function BankLogo({className = ''}) {
  return (
    <div className={`bank-logo ${className}`}>
      <div className='bank-icon'>
        <i className='fa-brands fa-react'></i>
      </div>
      <div className='bank-name'>
        React<span>Bank</span>
      </div>
    </div>
  );
}

export default BankLogo;

import React from 'react';

function TransactionMessage({setShowMessage}) {
  return (
    <div className='transaction-message'>
      <div className='transaction-successful'>
        <div className='message'>Transaction Successful!</div>
        <div className='close-message' onClick={() => setShowMessage(false)}>Close</div>
      </div>
    </div>
  );
}

export default TransactionMessage;

import React from 'react';
import BankLogo from './BankLogo';
import UserLogin from './UserLogin';

function DesktopLogin() {
  return (
    <div className='desktop-login'>
      <nav className='desktop-navbar'>
        <div className='desktop-bank-logo'>
          <div className='first-icon'>
            <i className='fa-brands fa-react'></i>
          </div>
          <div className='bank-name'>
            React<span>Bank</span>
          </div>
        </div>
        <ul>
          <li>Features</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Support</li>
          <li>Contact</li>
          <li>
            {' '}
            <span className='register'>Register </span>
          </li>
        </ul>
        <i className='fa-solid fa-bars'></i>
      </nav>
      <div className='slogan'>
        <div className='slogan-container'>
          It's time to bank <span className='differently'>differently</span>.
        </div>
        <div className='desktop-text'>
          Make your daily routine easier by managing money and transactions with
          the{' '}
          <span className='react-text'>
            <i className='fa-brands fa-react'></i>React
            <span className='bank-text'>Bank</span>
          </span>{' '}
          App.
        </div>
        <div className='desktop-options'>
          <div className='get-started'>
            Get Started <i className='fa-solid fa-arrow-right'></i>
          </div>
          <div className='download-app'>
            Download App <i className='fa-solid fa-download'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopLogin;

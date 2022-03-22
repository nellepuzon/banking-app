import React from 'react';
import Header from './Header';
import UserLogin from './UserLogin';

function DesktopLogin() {
  return (
    <div>
      <div className='desktop-login'>
        <Header/>
        <div className='main-page'>
          <div className='main-page-container'>
            <div className='slogan'>
              It's time to bank <span className='differently'>differently</span>
              .
            </div>
            <div className='slogan-text'>
              Make your daily routine easier by managing money<br></br> and
              transactions with the{' '}
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
          <UserLogin />
        </div>
        <footer className='second-section'>
          <div className='about'>
            <div className='about-title'>ABOUT REACTBANK</div>
            <div className='about-us'>
              <ul>
                <li>Who We Are</li>
                <li>Corporate Governance</li>
                <li>Investor Relations</li>
                <li>Disclosures</li>
                <li>News</li>
              </ul>
              <ul>
                <li>Careers</li>
                <li>FAQ</li>
                <li>Terms and Conditions</li>
                <li>Help Center</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>
          <div className='follow'>
            Follow Us
            <div className='social'>
              <i class='fa-brands fa-facebook-square'></i>
              <i class='fa-brands fa-instagram-square'></i>
              <i class='fa-brands fa-twitter-square'></i>
            </div>
          </div>
          <i class='fa-brands fa-cc-apple-pay'></i>
          <i class='fa-brands fa-google-pay'></i>
          <i class='fa-brands fa-cc-visa'></i>
          <i class='fa-brands fa-cc-mastercard'></i>
          <i class='fa-brands fa-cc-paypal'></i>
        </footer>
      </div>
    </div>
  );
}

export default DesktopLogin;

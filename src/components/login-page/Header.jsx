import React from "react";
import BankLogo from "./BankLogo";

function Header() {
    return (
        <header>
          <nav className='desktop-navbar'>
            <BankLogo />
            <ul>
              <li>Features</li>
              <li>Services</li>
              <li>Support</li>
              <li>Contact Us</li>
              <li>
                <span className='register'>Register </span>
              </li>
            </ul>
            <i className='fa-solid fa-bars'></i>
          </nav>
        </header>
    )
}

export default Header;
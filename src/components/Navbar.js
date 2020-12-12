import React, { useState, useEffect } from 'react';
import { RegButton, LoginButton } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CODL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/degree' className='nav-links' onClick={closeMobileMenu}>
                Degree
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/register' className='nav-links-mobile' onClick={closeMobileMenu}>
                Register
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
          </ul>
          <div className='nav-item-btn'>{button && <RegButton buttonStyle='btn--outline'>Register</RegButton>}</div>
          {button && <LoginButton buttonStyle='btn--outline'>Login</LoginButton>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

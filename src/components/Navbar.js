import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const texts = ["  VM Portfolio"];
  const textIndex = useRef(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      clearTimeout(handleScroll.timeout);

      handleScroll.timeout = setTimeout(() => {
        setScrolling(false);
      }, 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const typeText = () => {
      if (textIndex.current < texts[0].length) {
        setCurrentText((prevText) => prevText + texts[0][textIndex.current]);
        textIndex.current++;
        setTimeout(typeText, 50);
      }
    };

    typeText();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={`navbar ${scrolling ? 'navbar-hidden' : ''}`}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <div className="header-title-style ">
              <span>{currentText}</span>
            </div>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/synopsis' className='nav-links' onClick={closeMobileMenu}> {/* Update link to point to '/synopsis' */}
                Synopsis
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Resume
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Resume</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

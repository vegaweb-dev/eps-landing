import React, { useState } from 'react';
import './header.scss';

import { images } from '../../assets/images';

const Header = () => {
  const [open, setOpen] = useState(true);
  const handleClick = e => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <div>
        <header className='header'>
          <div className='header__logo'>
            <img src={images.logo} alt='' />
          </div>
          <ul className={open ? `header__navbar active` : `header__navbar`}>
            <li>About</li>
            <li>Contact</li>
            <li>Portfolio</li>
            <li>
              <button className='btn header__nav-btn'>View Plans</button>
            </li>
          </ul>
          {open ? (
            <div className='header__close' onClick={handleClick}>
              <img
                src={images.iconClose}
                alt='icon-close'
                className='header__close'
              />
            </div>
          ) : (
            <div className='header__hamburger' onClick={handleClick}>
              <img
                src={images.hamburger}
                alt='menu-hamburger'
                className='hamburger'
              />
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Header;

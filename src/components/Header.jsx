import React from 'react';

import Button from './Button';
import NavBar from './NavBar';

function Header ({ children }) {
  return (
    <header className="header">
      {children}
    </header>
  )
}

export default Header;

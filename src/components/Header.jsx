import React from 'react';

import Button from './Button';

function Header ({ addChar }) {
  return (
    <header className="header">
      <h2 className="app-header">Assemble your party</h2>
      {addChar &&
        <Button onClick={addChar}>Add Char</Button>
      }
    </header>
  )
}

export default Header;

import React from 'react';
import Button from 'react-bootstrap/Button';

function Header ({ addChar }) {
  return (
    <header className="header">
      <h2 className="app-header">Assemble your party</h2>
      {addChar &&
        <input
          type="button"
          value="AddChar"
          className="btn"
          onClick={addChar}
        />
      }
    </header>
  )
}

export default Header;

import React from 'react'
import Nav from 'react-bootstrap/Nav'

function NavLink ({ children, path, onClick }) {
  const click = evt => {
    evt.preventDefault();
    onClick(path);
  }

  return (
    <Nav.Link href={path} onClick={click}>
      {children}
    </Nav.Link>
  )
}

export default NavLink

import React from 'react'
import Nav from 'react-bootstrap/Nav'

function NavLink ({ path, onClick }) {
  const click = evt => {
    evt.preventDefault();
    onClick(path);
  }

  return (
    <Nav.Link href={path} onClick={click}>
      {path.charAt(0).toUpperCase() + path.slice(1)}
    </Nav.Link>
  )
}

export default NavLink

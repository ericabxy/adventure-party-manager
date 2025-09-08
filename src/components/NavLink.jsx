import React from 'react'
import Nav from 'react-bootstrap/Nav'

function NavLink ({ path, onClick }) {
  return (
    <Nav.Link href={`#${path}`} onClick={() => onClick(path)}>
      {path.charAt(0).toUpperCase() + path.slice(1)}
    </Nav.Link>
  )
}

export default NavLink

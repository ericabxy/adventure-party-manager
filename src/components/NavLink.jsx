import React from 'react'
import Nav from 'react-bootstrap/Nav'

function NavLink ({ path }) {
  const onClick = (evt) => {
    evt.preventDefault();
    window.history.pushState({}, '', path)
    window.dispatchEvent(new PopStateEvent('changescreen'))
  };

  return (
    <Nav.Link href={path} onClick={onClick}>
      {path.charAt(0).toUpperCase() + path.slice(1)}
    </Nav.Link>
  )
}

export default NavLink

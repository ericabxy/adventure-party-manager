import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from './NavLink.jsx';

function NavBar({ onClick }) {
  const click = evt => {
    evt.preventDefault();
    onClick(path);
  }

  return (
    <Navbar expand="sm" className="bg-light">
      <Container>
        <Navbar.Brand>Anti Fantasy</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink path="item" onClick={onClick}>Item</NavLink>
          <NavLink path="magic" onClick={onClick}>Magic</NavLink>
          <NavLink path="equip" onClick={onClick}>Equip</NavLink>
          <NavLink path="status" onClick={onClick}>Status</NavLink>
          <NavLink path="order" onClick={onClick}>Order</NavLink>
          <NavLink path="change" onClick={onClick}>Change</NavLink>
          <NavLink path="config" onClick={onClick}>Config</NavLink>
          <NavLink path="save" onClick={onClick}>Save</NavLink>
          <Navbar.Text>|</Navbar.Text>
          <NavLink path="battle" onClick={onClick}>Battle I</NavLink>
          <NavLink path="battleii" onClick={onClick}>Battle II</NavLink>
          <NavLink path="battleiii" onClick={onClick}>Battle III</NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from './NavLink.jsx';

function NavBar({ links, onClick }) {
  return (
    <Navbar expand="sm" className="bg-light">
      <Container>
        <Navbar.Brand>Anti Fantasy</Navbar.Brand>
        <Nav className="me-auto">
          {links.map((name) => (
            <NavLink path={name} onClick={onClick} />
          ))}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;

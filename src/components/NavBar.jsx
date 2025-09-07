import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ onClick }) {
  return (
    <Navbar expand="sm" className="bg-light">
      <Container>
        <Navbar.Brand href="" onClick={() => onClick('party')}>Anti Fantasy</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="" onClick={() => onClick('status')}>Status</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;

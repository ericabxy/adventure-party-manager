import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header ({ chara }) {
  return (
    <Container>
      <Row>
        <Col className="border">{chara.firstname}</Col>
        <Col xs={5} className="border">{chara.classname}</Col>
        <Col className="border">Lev {chara.explevel}</Col>
      </Row>
    </Container>
  )
}

export default Header

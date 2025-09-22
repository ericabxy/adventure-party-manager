import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function Experience (props) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" className="card">
          <dl>
            <dt>Experience Points</dt>
            <dd>0</dd>
            <dt>For Level Up</dt>
            <dd>40</dd>
          </dl>
        </Col>
      </Row>
    </Container>
  )
}

export default Experience

import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import Sprite from './Sprite'

function Party ({ charas }) {
  return (
    <Card bg="dark" border="light" text="light">
      <Card.Header>Party</Card.Header>
      <Card.Body>
        <ListGroup>
          {charas.map((chara, x) => (
            <Sprite key={x} dir="west">warrior femme</Sprite>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default Party

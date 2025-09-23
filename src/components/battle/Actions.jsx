import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function Actions ({ children }) {
  return (
    <Card>
      <ListGroup variant="flush">
        <ListGroup.Item>Fight</ListGroup.Item>
        <ListGroup.Item>Magic</ListGroup.Item>
        <ListGroup.Item>Drink</ListGroup.Item>
        <ListGroup.Item>Item</ListGroup.Item>
        <ListGroup.Item>Run</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default Actions

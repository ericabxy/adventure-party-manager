import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function Actions ({ children }) {
  const actionList = [
    'Fight',
    'Magic',
    'Drink',
    'Item',
    'Run'
  ];

  return (
    <Card>
      <ListGroup variant="flush">
        {actionList.map((name, x) => (
          <ListGroup.Item
            key={name.toLowerCase()}
            variant="dark"
          >
            {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  )
}

export default Actions

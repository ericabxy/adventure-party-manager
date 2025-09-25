import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function Actions ({ theme }) {
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
            className={theme}
            key={name.toLowerCase()}
          >
            {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  )
}

export default Actions

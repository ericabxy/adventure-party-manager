import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function EnemyNames ({ enemies, theme }) {
  return (
    <Card>
      <ListGroup variant="flush">
        {enemies.map((enemy, x) => (
          <ListGroup.Item
            className={theme}
            key={x}
          >
            {enemy.firstname}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  )
}

export default EnemyNames

import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function Party (props) {
  const { charas, theme } = props
  return (
    <Card className={theme}>
      <Card.Header>Party</Card.Header>
      <Card.Body>
          {charas.map((element, x) => (
              <div
                className={`sprite--attack ${element.charaset}--${element.variant} sprite--3`}
                key={x}
              />
          ))}
      </Card.Body>
    </Card>
  )
}

export default Party

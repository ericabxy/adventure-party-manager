import React from 'react'
import Card from 'react-bootstrap/Card'

function BattleParty (props) {
  const { charas, theme } = props
  return (
    <Card className={theme}>
      <Card.Header>Party</Card.Header>
      <Card.Body>
        {charas.map((element, x) => (
          <div
            className={`sprite-attack sprite-attack--${element.charaset}-${element.variant} sprite--3`}
            key={x}
          />
        ))}
      </Card.Body>
    </Card>
  )
}

export default BattleParty

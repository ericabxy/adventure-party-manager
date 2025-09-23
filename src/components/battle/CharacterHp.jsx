import React from 'react'
import Card from 'react-bootstrap/Card'

function CharacterHp ({ charaname, stats, theme }) {
  return (
    <Card className={theme}>
      <Card.Body>
        <Card.Title>{charaname ? charaname : '????'}</Card.Title>
        <Card.Body><strong>HP:</strong> {stats.hitpoints}</Card.Body>
      </Card.Body>
    </Card>
  )
}

export default CharacterHp

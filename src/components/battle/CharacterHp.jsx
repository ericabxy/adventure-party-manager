import React from 'react'
import Card from 'react-bootstrap/Card'

function CharacterHp ({ charaname, stats }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{charaname ? charaname : '????'}</Card.Title>
        <Card.Body><strong>HP:</strong> {stats.hitpoints}</Card.Body>
      </Card.Body>
    </Card>
  )
}

export default CharacterHp

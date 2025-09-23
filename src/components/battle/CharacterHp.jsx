import React from 'react'
import Card from 'react-bootstrap/Card'

function CharacterHp ({ charaname, stats, theme }) {
  return (
    <Card className={`chara-hp-box ${theme}`}>
      <Card.Body>
        <Card.Title>{charaname ? charaname : '????'}</Card.Title>
        <Card.Text>HP: {stats.hitpoints}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CharacterHp

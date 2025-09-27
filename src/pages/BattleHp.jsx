import React from 'react'
import Card from 'react-bootstrap/Card'

function BattleHp ({ charas, theme }) {
  return (
    <>
      {charas.map((chara, x) => (
        <Card className={`chara-hp-box ${theme}`} key={x}>
          <Card.Body>
            <Card.Title>{chara.firstname ? chara.firstname : '????'}</Card.Title>
            <Card.Text>HP: 20</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default BattleHp

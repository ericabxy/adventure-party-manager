import React from 'react'
import Card from 'react-bootstrap/Card'

import Sprite from '../Sprite'

function Party ({ charas }) {
  return (
    <Card bg="dark" text="light">
      <Card.Header>Party</Card.Header>
      <div style={{
        alignItems: 'flex-end',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {charas.map((chara, x) => (
          <Sprite dir="west">warrior femme</Sprite>
        ))}
      </div>
    </Card>
  )
}

export default Party

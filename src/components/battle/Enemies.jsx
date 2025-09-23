import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

import skeleton1 from '../../assets/skeleton_1.png'
import './battle.css'

function Enemies ({ enemyList }) {
  const targetlist = [
    skeleton1,
    skeleton1,
    skeleton1,
    skeleton1,
    skeleton1
  ]

  return (
    <Card bg="dark" text="light">
      <Card.Header>Battlefield</Card.Header>
      <Card.Body>
        {targetlist.map((image, x) => (
          <div className="enemy" key={x}>
            <img alt="enemy" src={image} />
          </div>
        ))}
      </Card.Body>
    </Card>
  )
}

export default Enemies;

import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

import skeleton1 from '../assets/skeleton_1.png'

function Enemies ({ enemyList, theme }) {
  const targetlist = [
    skeleton1,
    skeleton1,
    skeleton1,
    skeleton1,
    skeleton1
  ]

  return (
    <Card className={theme}>
      <Card.Header>Enemies</Card.Header>
      <Card.Body>
        {targetlist.map((image, x) => (
          <Image key={x} src={image} />
        ))}
      </Card.Body>
    </Card>
  )
}

export default Enemies;

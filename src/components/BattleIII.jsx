import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import AllyStatus from './battle/AllyStatus'
import Enemies from './battle/Enemies'
import Sprite from './Sprite'

function BattleIII ({  }) {
  // Battle III focuses on using raw flexbox containers
  // to layout the battlefield. It's a bit of a mess right now.
  const [ chars, setChars ] = useState([]);
  const charData = JSON.parse(localStorage.getItem('saveData'));

  useEffect(() => {
    if (charData == null) {
      setChars([]);
    } else {
      setChars(charData);
    }
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <Enemies />
        </Col>
        <Col>
          <AllyStatus chars={chars}/>
        </Col>
      </Row>
    </Container>
  )
}

export default BattleIII

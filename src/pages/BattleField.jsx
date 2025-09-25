import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BattleEnemy from './BattleEnemy'
import BattleParty from './BattleParty'

function Battlefield ({ theme }) {
  // Left and right sides of the battlefield
  const [ charas, setCharas ] = useState([]);
  const charaData = JSON.parse(localStorage.getItem('saveData'));

  useEffect(() => {
    if (charaData == null) {
      setCharas([]);
    } else {
      setCharas(charaData);
    }
  }, [])

  return (
    <Row>
      <Col>
        <BattleEnemy theme={theme} />
      </Col>
      <Col xs={3}>
        <BattleParty theme={theme} charas={charas} />
      </Col>
    </Row>
  )
}

export default Battlefield

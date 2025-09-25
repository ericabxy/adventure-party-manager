import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BattleTargets from './BattleTargets'
import BattleCommands from './BattleCommands'

function Information ({ theme }) {
  const enemies = [
    {firstname: 'Enemy A'},
    {firstname: 'Enemy B'},
    {firstname: 'Enemy C'},
    {firstname: 'Enemy D'},
    {firstname: 'Enemy F'},
  ];

  return (
    <Row>
      <Col>
        <BattleTargets enemies={enemies} theme={theme} />
      </Col>
      <Col>
        <BattleCommands theme={theme} />
      </Col>
    </Row>
  )
}

export default Information

import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import EnemyNames from './EnemyNames'
import Actions from './Actions'

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
        <EnemyNames enemies={enemies} theme={theme} />
      </Col>
      <Col>
        <Actions theme={theme} />
      </Col>
    </Row>
  )
}

export default Information

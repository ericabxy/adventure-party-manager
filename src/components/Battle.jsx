import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Actions from './battle/Actions'
import Battlefield from './battle/Battlefield'
import EnemyNames from './battle/EnemyNames'
import Enemies from './battle/Enemies'
import Party from './battle/Party'
import PartyHp from './battle/PartyHp'

function Battle ({  }) {
  // Battle I lays out the battlefield using React Bootstrap components
  const [ chars, setChars ] = useState([]);
  const charData = JSON.parse(localStorage.getItem('saveData'));

  useEffect(() => {
    if (charData == null) {
      setChars([]);
    } else {
      setChars(charData);
    }
  }, [])
  
  const enemies = [
    {firstname: 'Enemy A'},
    {firstname: 'Enemy B'},
    {firstname: 'Enemy C'},
    {firstname: 'Enemy D'},
    {firstname: 'Enemy F'},
  ];

  return (
    <Container style={{backgroundColor: 'black', borderRadius: '5px', padding: '2px'}}>
      <Row>
        <Col>
          <Battlefield />
          <Row>
            <Col>
              <EnemyNames enemies={enemies} />
            </Col>
            <Col>
              <Actions />
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <Col>
            <PartyHp charas={chars} />
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Battle;

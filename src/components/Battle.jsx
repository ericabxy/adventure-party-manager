import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AllyStatus from './battle/AllyStatus';
import Enemies from './battle/Enemies';
import Sprite from './Sprite';

function Battle ({  }) {
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

export default Battle;

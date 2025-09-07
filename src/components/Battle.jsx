import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Allies from './battle/Allies.jsx';
import Enemies from './battle/Enemies.jsx';

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
    <>
      <Container>
        <Row>
          <Col xs={9}>
            <Enemies />
          </Col>
          <Col xs={3}>
            <Allies chars={chars}/>
          </Col>
        </Row>
      </Container>
      <div>
        {
        }
      </div>
    </>
  )
}

export default Battle;

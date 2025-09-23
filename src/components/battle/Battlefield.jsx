import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Enemies from './Enemies'
import Party from './Party'

function Battlefield ({ children }) {
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
        <Enemies />
      </Col>
      <Col xs={3}>
        <Party charas={charas} />
      </Col>
    </Row>
  )
}

export default Battlefield

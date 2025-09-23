import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Enemies from './Enemies'
import Party from './Party'

function Battlefield ({ theme }) {
  // Left and right sides of the battlefield
  const [ charas, setCharas ] = useState([]);
  const charaData = JSON.parse(localStorage.getItem('saveData'));
  const dark = 'bg-dark border-light text-light'

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
        <Enemies theme={theme} />
      </Col>
      <Col xs={3}>
        <Party theme={theme} charas={charas} />
      </Col>
    </Row>
  )
}

export default Battlefield

import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

import Actions from './battle/Actions'
import Battlefield from './battle/Battlefield'
import EnemyNames from './battle/EnemyNames'
import Enemies from './battle/Enemies'
import Information from './battle/Information'
import Party from './battle/Party'
import PartyHp from './battle/PartyHp'

function Battle ({  }) {
  // Battle I lays out the battlefield using React Bootstrap components
  const [ chars, setChars ] = useState([]);
  const charData = JSON.parse(localStorage.getItem('saveData'));
  const dark = 'bg-dark border-light text-light';
  const light = 'bg-light';
  const outerlight = 'p-1 rounded-3 ';
  const outerdark = 'bg-dark p-1 rounded-3 text-light';
  const [ theme, setTheme ] = useState(dark);
  const [ outer, setOuter ] = useState(outerdark);
  const [ isDark, setIsDark ] = useState(true);
  
  const toggle = () => {
    if (theme === dark) {
      setTheme(light);
      setOuter(outerlight);
    } else {
      setTheme(dark);
      setOuter(outerdark);
    }
  };

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
    <>
      <Form.Switch
        checked={theme === dark}
        onChange={toggle}
        id="toggle-theme"
      />
      <Container className={outer}>
        <Row>
          <Col>
            <Battlefield theme={theme} />
            <Information theme={theme} />
          </Col>
          <Col xs={3}>
            <Col>
              <PartyHp charas={chars} theme={theme} />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Battle

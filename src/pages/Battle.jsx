import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

import BattleField from './BattleField'
import BattleInfo from './BattleInfo'
import BattleHp from './BattleHp'

function Battle ({  }) {
  // Battle I lays out the battlefield using React Bootstrap components
  const [ chars, setChars ] = useState([]);
  const charData = JSON.parse(localStorage.getItem('saveData'));
  const dark = 'bg-dark border-light text-light';
  const light = 'bg-light';
  const outerlight = 'bg-light p-1 rounded-3';
  const outerdark = 'bg-dark p-1 rounded-3 text-light';
  const [ theme, setTheme ] = useState(light);
  const [ outer, setOuter ] = useState(outerlight);
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
    <Container className={outer}>
      <Row>
        <Col>
          <BattleField theme={theme} />
          <BattleInfo theme={theme} />
        </Col>
        <Col xs={3}>
          <BattleHp charas={chars} theme={theme} />
        </Col>
      </Row>
    </Container>
  )
}

export default Battle

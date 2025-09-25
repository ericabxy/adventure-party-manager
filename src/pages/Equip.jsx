import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'

import EquipCharacter from './EquipCharacter'

function Equip (props) {
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
      <h3>Equip</h3>
      <Container>
        {chars.map((char, x) => (
          <EquipCharacter key={x} name={char.firstname} />
        ))}
      </Container>
    </>
  )
}

export default Equip

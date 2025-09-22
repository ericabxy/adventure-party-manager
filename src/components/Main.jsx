import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import Character from './Character.jsx';

function Main () {
  // Main screen showing party members and menu
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
    <ListGroup>
      {chars.map((char, x) => (
        <ListGroup.Item key={x}>
          <Character chara={char.charaset} variant={char.variant} name={char.firstname} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default Main;

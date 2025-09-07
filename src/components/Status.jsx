import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import Character from './Character.jsx';

function Status () {
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
        <ListGroup.Item>
          <Character char={char} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default Status;

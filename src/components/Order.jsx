import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import Character from './order/Character'
import Portrait from './order/Portrait'
import Swap from './order/Swap'

function Order () {
  // Change the display position of characters
  const [ charas, setCharas ] = useState([]);
  const charaData = JSON.parse(localStorage.getItem('saveData'));

  useEffect(() => {
    if (charaData == null) {
      setCharas([]);
    } else {
      setCharas(charaData);
    }
  }, [])
  
  const doSwap = (src, dest) => {
    const swap = charaData[dest];
    charaData[dest] = charaData[src];
    charaData[src] = swap;
    localStorage.setItem('saveData', JSON.stringify(charaData));
    setCharas(charaData);
  };

  return (
    <ListGroup>
      {charas.map((char, x) => (
        <ListGroup.Item key={x}>
          <Swap choices={charas} position={x} onChange={doSwap} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default Order

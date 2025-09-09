import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import Ally from './Ally.jsx';

function Enemies ({ chars }) {
  return (
    <>
      <ListGroup>
        {chars.map((char, x) => (
          <ListGroup.Item>
            <Ally char={char} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

export default Enemies;

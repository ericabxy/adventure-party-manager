import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

import Ally from './Ally.jsx';

import avatars from '../../assets/avatars';

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

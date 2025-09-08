import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

import skeleton1 from '../../assets/skeleton_1.png';
import './battle.css';

function Enemies ({ enemyList }) {
  const targetlist = [
    skeleton1,
    skeleton1,
    skeleton1,
    skeleton1,
    skeleton1
  ]

  return (
    <div className="enemy-box">
      {targetlist.map((image) => (
        <div className="enemy">
          <img alt="enemy" src={image} />
        </div>
      ))}
    </div>
  )
}

export default Enemies;

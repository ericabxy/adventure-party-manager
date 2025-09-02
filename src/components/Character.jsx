import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

import warriorB from '../assets/warrior_b.png';
import warriorR from '../assets/warrior_r.png';
import magicianB from '../assets/magician_b.png';
import magicianR from '../assets/magician_r.png';
import healerB from '../assets/healer_b.png';
import healerR from '../assets/healer_r.png';
import ninjaB from '../assets/ninja_b.png';
import ninjaR from '../assets/ninja_r.png';
import rangerB from '../assets/ranger_b.png';
import rangerR from '../assets/ranger_r.png';
import monkB from '../assets/monk_b.png';
import monkR from '../assets/monk_r.png';

const avatars = [
  [ warriorB, warriorR ],
  [ magicianB, magicianR ],
  [ healerB, healerR ],
  [ ninjaB, ninjaR ],
  [ rangerB, rangerR ],
  [ monkB, monkR ],
];

const classNames = [
  'Warrior',
  'Magician',
  'Healer',
  'Ninja',
  'Ranger',
  'Monk'
];

const stats = [
  { 'Str': 500, 'Ref': 200, 'Mag': 100 },
  { 'Str': 100, 'Ref': 300, 'Mag': 500 },
  
  { 'Str': 200, 'Ref': 200, 'Mag': 500 },
  { 'Str': 200, 'Ref': 300, 'Mag': 200 },
  
  { 'Str': 200, 'Ref': 200, 'Mag': 400 },
  { 'Str': 200, 'Ref': 200, 'Mag': 200 },
]

function Character ({ char }) {
  return (
    <div>
      <img src={avatars[char.class][char.gender]} style={{float: 'left', width: '32px'}}/>
      <strong style={{float: 'right'}}>{classNames[char.class]}</strong>
      <div>{char.named ? char.named : '...'}</div>
      <div style={{float: 'right'}}>
        <strong>Str:</strong>
        <span style={{marginRight: '1em'}}>{stats[char.class]['Str']}</span>
        <strong>Ref:</strong>
        <span style={{marginRight: '1em'}}>{stats[char.class]['Ref']}</span>
        <strong>Mag:</strong>
        <span>{stats[char.class]['Mag']}</span>
      </div>
      <strong>Lv. 1</strong>
    </div>
  )
}

export default Character;

import React from 'react';

import avatars from '../assets/avatars.js';

const stats = {
  'Warrior': { 'Str': 500, 'Ref': 200, 'Mag': 100 },
  'Magician': { 'Str': 100, 'Ref': 300, 'Mag': 500 },
  
  'Healer': { 'Str': 200, 'Ref': 200, 'Mag': 500 },
  'Ninja': { 'Str': 200, 'Ref': 300, 'Mag': 200 },
  
  'Ranger': { 'Str': 200, 'Ref': 200, 'Mag': 400 },
  'Monk': { 'Str': 200, 'Ref': 200, 'Mag': 200 },
}

function Character ({ char }) {
  console.log(char.classname);
  return (
    <div>
      <img src={avatars[char.classname][char.gender]} style={{float: 'left', width: '40px'}}/>
      <strong style={{float: 'right'}}>{char.classname}</strong>
      <div>{char.name1 ? char.name1 : '...'}</div>
      <div style={{float: 'right'}}>
        <strong>Str:</strong>
        <span style={{marginRight: '1em'}}>{stats[char.classname]['Str']}</span>
        <strong>Ref:</strong>
        <span style={{marginRight: '1em'}}>{stats[char.classname]['Ref']}</span>
        <strong>Mag:</strong>
        <span>{stats[char.classname]['Mag']}</span>
      </div>
      <strong>Lv. 1</strong>
    </div>
  )
}

export default Character;

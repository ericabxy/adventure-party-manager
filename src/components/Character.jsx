import React from 'react';

import avatars from '../assets/avatars';
import charaset from '../assets/charaset';

function Character ({ char }) {
  const stats = charaset[char.classname].stats;
  
  return (
    <div>
      <img src={avatars[char.classname][char.gender]} style={{float: 'left', width: '32px'}}/>
      <span style={{float: 'right'}}>{char.classname}</span>
      <div>{char.name1 ? char.name1 : '...'}</div>
      <div style={{float: 'right'}}>
        {Object.keys(stats).map((name, x) => (
          <>
            <strong>{name}: </strong>
            <span style={{marginRight: '1em'}}>{stats[name]}</span>
          </>
        ))}
      </div>
      <strong>Lv. 1</strong>
    </div>
  )
}

export default Character;

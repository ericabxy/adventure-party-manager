import React from 'react';

import avatars from '../assets/avatars';
import charaset from '../assets/charaset';
import faces from '../assets/faces';

function Character ({ char }) {
  const image = faces[char.classname][char.gender]
  const stats = charaset[char.classname].stats;
  
  return (
    <div>
      <img src={image} style={{float: 'left', height: '96px'}}/>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>{char.name1 ? char.name1 : '...'}</div>
        <div>{char.classname}</div>
        <div>Lv. 1</div>
      </div>
      <div style={{float: 'right'}}>
        {Object.keys(stats).map((name, x) => (
          <>
            <strong>{name}: </strong>
            <span style={{marginRight: '1em'}}>{stats[name]}</span>
          </>
        ))}
      </div>
    </div>
  )
}

export default Character;

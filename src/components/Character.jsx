import React from 'react';
import Portrait from './Portrait.jsx';

import avatars from '../assets/avatars';
import charaset from '../assets/charaset';
import faces from '../assets/faces';

function Character ({ char }) {
  const image = faces[char.classname][char.gender]
  const stats = charaset[char.classname].stats;
  const vigor = charaset[char.classname].stats['Vig'];
  const hitpoints = 20 + (vigor * 6 / 2);
  
  return (
    <div>
      <Portrait charaset={char.classname} variant={char.gender} />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>{char.name1 ? char.name1 : '...'}</div>
        <div>{char.classname}</div>
        <div>Lv. 1</div>
      </div>
      <div style={{float: 'right'}}>
        <div>{hitpoints}</div>
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

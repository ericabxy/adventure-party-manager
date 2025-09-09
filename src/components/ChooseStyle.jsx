import React from 'react';

import charaset from '../assets/charaset';
import faces from '../assets/faces';

function ChooseStyle ({ chara, value, onClick }) {
  /* Originally "male" and "female" styles. */
  return (
    <select
      style={{width: '100%'}}
      value={value}
      onChange={evt => onClick(evt.target.value)}
    >
      {chara in charaset &&
        Object.keys(faces[chara]).map((name) => (
          <option value={name}>{name.toUpperCase()}</option>
        ))
      }
    </select>
  )
}

export default ChooseStyle;

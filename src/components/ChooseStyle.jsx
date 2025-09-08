import React from 'react';

import charaset from '../assets/charaset';

function ChooseStyle ({ chara, value, onClick }) {
  /* Originally "male" and "female" styles. */
  return (
    <select
      style={{width: '100%'}}
      value={value}
      onChange={evt => onClick(evt.target.value)}
    >
      {Object.keys(charaset[chara]['portrait']).map((name) => (
        <option value={name}>{name.toUpperCase()}</option>
      ))}
    </select>
  )
}

export default ChooseStyle;

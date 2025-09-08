import React from 'react';

import charaset from '../assets/charaset';

function ChooseClass ({ value, onClick }) {
  return (
    <select
      style={{width: '100%'}}
      value={value}
      onChange={evt => onClick(evt.target.value)}
    >
      {Object.keys(charaset).map((name) => (
        <option value={name}>{name}</option>
      ))}
    </select>
  )
}

export default ChooseClass;

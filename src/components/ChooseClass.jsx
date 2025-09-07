import React from 'react';

import portraits from '../assets/portraits';

function ChooseClass ({ value, onClick }) {
  return (
    <select
      style={{width: '100%'}}
      value={value}
      onChange={evt => onClick(evt.target.value)}
    >
      {Object.keys(portraits).map((name, x) => (
        <option value={name}>{name}</option>
      ))}
    </select>
  )
}

export default ChooseClass;

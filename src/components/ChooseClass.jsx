import React from 'react';

import charaset from '../assets/charaset';

function ChooseClass ({ value, onClick }) {
  const choices = [
    'warrior',
    'magician',
    'healer',
    'ninja',
    'ranger',
    'monk',
  ];

  return (
    <select
      value={value}
      onChange={evt => onClick(evt.target.value)}
    >
      {choices.map((name, x) => (
        <option key={x} value={name}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </option>
      ))}
    </select>
  )
}

export default ChooseClass;

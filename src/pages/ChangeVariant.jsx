import React from 'react';

function ChangeVariant ({ chara, value, onClick }) {
  /* Originally "male" and "female" styles. */
  const choices = [ 'masc', 'femme' ];

  return (
    <select
      style={{width: '100%'}}
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

export default ChangeVariant

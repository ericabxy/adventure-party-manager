import React, { useEffect, useState } from 'react'

function Swap ({ chara, characters, position, onChange }) {
  // Simple interface to choose characters to swap
  // Show name of character in dropdown
  // Swap when dropdown value changes
  const firstname = characters[position].firstname;

  return (
    <>
      <select
        value={position}
        onChange={evt => onChange(position, evt.target.value)}
      >
        {characters.map((character, x) => (
          <option key={x} value={x}>
            {character.firstname}
          </option>
        ))}
      </select>
      <label>{firstname}</label>
    </>
  )
}

export default Swap

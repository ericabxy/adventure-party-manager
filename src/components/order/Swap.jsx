import React, { useState } from 'react'

function Swap ({ choices, position, onChange }) {
  // Simple interface to choose characters to swap
  // Show name of character in dropdown
  // Swap when dropdown value changes

  return (
    <select
      value={position}
      onChange={evt => onChange(position, evt.target.value)}
    >
      {choices.map((chara, x) => (
        <option key={x} value={x}>
          {chara.firstname}
        </option>
      ))}
    </select>
  )
}

export default Swap

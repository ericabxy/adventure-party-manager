import React from 'react'

function Slot ({ children, choices, key }) {
  return (
    <select className="form-select" id={key}>
      <option>{children}...</option>
      {choices.map((name, x) => (
        <option value={name}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </option>
      ))}
    </select>
  )
}
//      <a className="dropdown-item" href="#">Item</a>

export default Slot

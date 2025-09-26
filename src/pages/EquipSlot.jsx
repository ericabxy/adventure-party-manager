import React from 'react'

function EquipSlot (props) {
  const { children, choices } = props
  return (
    <select className="form-select">
      <option>{children}...</option>
      {choices.map((name, x) => (
        <option value={name} key={x}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </option>
      ))}
    </select>
  )
}
//      <a className="dropdown-item" href="#">Item</a>

export default EquipSlot

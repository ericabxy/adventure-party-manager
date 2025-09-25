import React from 'react'

function Radio ({ id, name, value }) {
  return (
    <label className="list-group-item">
      {value}&nbsp;
      <input
        className="form-check-input"
        type="radio"
        id={id}
        name={name}
        value={value}
      />
    </label>
  )
}

export default Radio

import React from 'react'

function Portrait (props) {
  const { charaset, variant } = props
  return (
    <div
      className={`sprite-face sprite--${charaset}-${variant}`}
      style={{ float: 'left' }}
    />
  )
}

export default Portrait

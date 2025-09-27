import React from 'react'

function SpriteFace (props) {
  const { children } = props
  return (
    <div
      className={`sprite-face sprite-face--${children}`}
      style={{ float: 'left' }}
    />
  )
}

export default SpriteFace

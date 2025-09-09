import React from 'react'

function Sprite ({ className }) {
  return (
    <div
      className={`sprite ${className} south step-2`}
      style={{display: 'block', margin: '.25em auto'}}
    />
  )
}

export default Sprite

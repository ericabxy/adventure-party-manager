import React from 'react'

function Sprite ({ children, dir = '' }) {
  return (
    <div className={`sprite ${children} ${dir}`} />
  )
}

export default Sprite

import React from 'react'

function Sprite ({ children, dir = '' }) {
  console.log(`sprite ${children} ${dir}`);
  return (
    <div className={`sprite ${children} ${dir}`} />
  )
}

export default Sprite

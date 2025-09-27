import React from 'react'

function Sprite (props) {
  const { angle, children, frame } = props
  return (
    <div className={`sprite sprite--${angle} sprite--${children} sprite--${frame}`} />
  )
}

export default Sprite

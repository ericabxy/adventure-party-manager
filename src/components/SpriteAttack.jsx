import React from 'react'

function SpriteAttack (props) {
  const { angle, children, frame } = props
  return (
    <div className={`sprite--attack sprite--${angle} ${children} sprite--${frame}`} />
  )
}

export default SpriteAttack

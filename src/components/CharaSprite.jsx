import React from 'react'

function CharaSprite ({ chara, dir = 'east', pose = 'attack', step = '0' }) {
  const charaset = chara.charaset;
  const variant = chara.variant;

  return (
    <div className={
      `sprite \
      ${charaset} \
      ${variant} \
      ${dir} \
      ${pose} \
      step-${step}`
    }/>
  )
}

export default CharaSprite

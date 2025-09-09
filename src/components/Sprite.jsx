import React, { useState } from 'react'

import sprites from '../assets/sprites';

function Sprite ({ charaset, direct, scale, variant }) {
  const gender = variant == 'b' ? 'femme' : 'masc';
  const width = scale == 'x3' ? 48
    : scale == 'x2' ? 32
    : 16;
  const height = scale == 'x3' ? 54
    : scale == 'x2' ? 36
    : 18;

  return (
    <div
      className={`sprite-viewport ${scale}`}
      style={{
        display: 'block',
        margin: '1em auto'
      }}
    >
      <img
        className={`sprite ${scale} ${charaset} ${gender} ${direct} step-2`}
        alt="sprite"
        width={width * 3}
        height={height * 4}
      />
    </div>
  )
}

export default Sprite

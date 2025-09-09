import React, { useState } from 'react'

function Sprite ({ charaset, direct, scale, variant }) {
  const gender = variant == 'b' ? 'femme' : 'masc';
  const [ step, setStep ] = useState(2);

  return (
    <div
      className={`sprite-viewport ${scale}`}
      style={{display: 'block', margin: '1em auto'}}
    >
      <img
        className={`sprite ${scale} ${charaset} ${gender} ${direct} step-2`}
        alt="sprite"
      />
    </div>
  )
}

export default Sprite

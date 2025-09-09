import React, { useState } from 'react'
import '../sprite.css';

function Sprite ({ charaset, direct, scale, variant }) {
  const gender = variant == 'b' ? 'femme' : 'masc';
  const [ step, setStep ] = useState(2);

  return (
    <div
      className={`sprite ${charaset} ${gender} south step-2`}
      style={{display: 'block', margin: '1em auto'}}
    >
    </div>
  )
}

export default Sprite

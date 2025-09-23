import React from 'react'
import Image from 'react-bootstrap/Image'

import warrior from '../../assets/warrior_b_battle_sprite.png'

function Sprite ({ children }) {
  return (
    <Image style={{imageRendering: 'pixelated'}} src={warrior}>
    </Image>
  )
}

export default Sprite

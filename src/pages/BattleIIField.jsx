import React from 'react'

import Sprite from '../components/Sprite'
import Window from './BattleIIWindow'

function Battlefield ({ children }) {
  return (
    <div className="battlefield">
      <Sprite dir="west">warrior femme</Sprite>
      <Sprite dir="west">magician masc</Sprite>
      <Sprite dir="west">healer femme</Sprite>
      <Sprite dir="west">ninja masc</Sprite>
    </div>
  )
}

export default Battlefield

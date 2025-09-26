import React from 'react'

import Sprite from '../components/Sprite'
import Window from './BattleIIWindow'

function Battlefield (props) {
  const { party } = props
  return (
    <div className="battlefield">
      {party.map((element, x) => (
        <div
          className={`sprite--attack ${element.charaset}--${element.variant} sprite--a sprite--3`}
          key={x}
        />
      ))}
    </div>
  )
}

export default Battlefield

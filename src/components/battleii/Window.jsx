import React from 'react'

import EnemyNames from './EnemyNames'
import PartyHp from './PartyHp'

function Window ({ children }) {
  return (
    <div className="battlewindow">
      <EnemyNames />
      <PartyHp />
    </div>
  )
}

export default Window

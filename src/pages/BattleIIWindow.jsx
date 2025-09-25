import React from 'react'

import EnemyNames from './BattleIIEnemyNames'
import PartyHp from './BattleIIPartyHp'

function Window ({ children }) {
  return (
    <div className="battlewindow">
      <EnemyNames />
      <PartyHp />
    </div>
  )
}

export default Window

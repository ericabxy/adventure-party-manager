import React from 'react'

import Intro from './Intro'
//
import Item from './Item'
import Skill from './Skill'
import Equip from './Equip'
import Status from './Status'
import Order from './Order'
import Change from './Change'
import Config from './Config'
import Save from './Save'
//
import Battle from './Battle'
import BattleII from './BattleII'
import BattleIII from './BattleIII'

function Screen ({ page }) {
  return (
    <main>
      {page === 'intro' && <Intro />}
      {page === 'item' && <Item />}
      {page === 'skill' && <Skill />}
      {page === 'equip' && <Equip />}
      {page === 'status' && <Status />}
      {page === 'order' && <Order />}
      {page === 'change' && <Change />}
      {page === 'config' && <Config />}
      {page === 'save' && <Save />}
      {page === 'battle' && <Battle />}
      {page === 'battleii' && <BattleII />}
      {page === 'battleiii' && <BattleIII />}
    </main>
  )
}

export default Screen

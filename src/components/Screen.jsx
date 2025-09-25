import React from 'react'

import Intro from './Intro'
//
import Item from '../pages/Item'
import Skill from '../pages/Skill'
import Equip from '../pages/Equip'
import Status from '../pages/Status'
import Order from '../pages/Order'
import Change from '../pages/Change'
import Config from '../pages/Config'
import Save from '../pages/Save'
//
import Battle from '../pages/Battle'
import BattleII from '../pages/BattleII'

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

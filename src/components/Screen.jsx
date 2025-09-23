import React from 'react'

import Item from './Item'
import Magic from './Magic'
import Equip from './Equip'
import Status from './Status'
import Order from './Order'
import Change from './Change'
import Config from './Config'
import Save from './Save'
//
import Battle from './Battle'

function Screen ({ page }) {
  return (
    <main>
      {page === 'item' && <Item />}
      {page === 'magic' && <Magic />}
      {page === 'equip' && <Equip />}
      {page === 'status' && <Status />}
      {page === 'order' && <Order />}
      {page === 'change' && <Change />}
      {page === 'config' && <Config />}
      {page === 'save' && <Save />}
      {page === 'battle' && <Battle />}
    </main>
  )
}

export default Screen

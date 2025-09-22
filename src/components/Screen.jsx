import React from 'react'

import Party from './Party'
//
import Main from './Main'
import Item from './Item'
import Magic from './Magic'
import Equip from './Equip'
import Status from './Status'
import Config from './Config'
import Save from './Save'
//
import Battle from './Battle'

function Screen ({ page }) {
  return (
    <main>
      {page === 'party' && <Party />}
      {page === 'main' && <Main />}
      {page === 'item' && <Item />}
      {page === 'magic' && <Magic />}
      {page === 'status' && <Status />}
      {page === 'config' && <Config />}
      {page === 'save' && <Save />}
      {page === 'battle' && <Battle />}
    </main>
  )
}

export default Screen

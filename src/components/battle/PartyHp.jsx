import React from 'react'

import CharacterHp from './CharacterHp'

function PartyHp ({ charas }) {
  return (
    <>
      {charas.map((chara, x) => (
        <CharacterHp charaname={chara.firstname} stats={{hitpoints: 25}} />
      ))}
    </>
  )
}

export default PartyHp

import React from 'react'

import CharacterHp from './CharacterHp'

function PartyHp ({ charas }) {
  return (
    <>
      {charas.map((chara, x) => (
        <CharacterHp key={x} charaname={chara.firstname} stats={{hitpoints: 25}} />
      ))}
    </>
  )
}

export default PartyHp

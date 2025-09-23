import React, { useEffect, useState } from 'react'

import Portrait from './Portrait'
import Swap from './Swap'

function Character ({ chara, onSwap }) {
  const [ charaset, setCharaset ] = useState(chara.charaset);

  // Update callback if anything has changed
  useEffect(() => {
  }, [charaset])

  return (
    <>
      <Portrait charaset={chara.charaset} variant={chara.variant} />
      <Swap choices={['One', 'Two', 'Three']} position={x} doSwap={doSwap} />
    </>
  )
}
export default Character

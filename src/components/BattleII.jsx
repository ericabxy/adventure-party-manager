import React, { useEffect, useState } from 'react'

import Battlefield from './battleii/Battlefield'
import Window from './battleii/Window'

function Battle ({  }) {
  const [ chars, setChars ] = useState([]);
  const charData = JSON.parse(localStorage.getItem('saveData'));

  useEffect(() => {
    if (charData == null) {
      setChars([]);
    } else {
      setChars(charData);
    }
  }, [])

  return (
    <>
      <Battlefield />
      <Window />
    </>
  )
}

export default Battle

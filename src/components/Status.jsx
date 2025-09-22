import React, { useEffect, useState } from 'react'

import Header from './status/Header'
import Experience from './status/Experience'
import Stats from './status/Stats'

function Status () {
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
      <Header chara={{classname: 'Warrior', firstname: 'Jude', explevel: 1}} />
      <Experience />
      <Stats />
    </>
  )
}

export default Status

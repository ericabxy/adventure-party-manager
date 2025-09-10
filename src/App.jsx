import React, { useEffect, useState } from 'react'
import './App.css'

import Battle from './components/Battle'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Party from './components/Party'
import Save from './components/Save'
import Status from './components/Status'

import image from './assets/warrior_b_attack.png'

function App() {
  const [ subpage, setSubpage ] = useState('party');

  return (
    <>
      <NavBar links={['party', 'status', 'battle', 'save']} onClick={setSubpage} />
      <main>
        {subpage === 'party' && <Party />}
        {subpage === 'status' && <Status />}
        {subpage === 'battle' && <Battle />}
        {subpage === 'save' && <Save />}
      </main>
      <Footer />
    </>
  )
}

export default App

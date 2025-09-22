import React, { useEffect, useState } from 'react'
import './App.css'

import NavBar from './components/NavBar'
import Screen from './components/Screen'
import Footer from './components/Footer'

function App() {
  const [ subpage, setSubpage ] = useState('party');

  return (
    <>
      <NavBar onClick={setSubpage} />
      <Screen page={subpage} />
      <Footer />
    </>
  )
}

export default App

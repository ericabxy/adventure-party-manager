import React, { useEffect, useState } from 'react'
import './App.css'

import Battle from './components/Battle.jsx';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import Party from './components/Party.jsx';
import Save from './components/Save.jsx';
import Screen from './components/Screen.jsx';
import Status from './components/Status.jsx';

function App() {
  const [ subpage, setSubpage ] = useState('party');

  return (
    <>
      <NavBar links={['party', 'status', 'battle', 'save']} onClick={setSubpage} />
      <main>
        <Screen path="/">
          <Party />
        </Screen>
        <Screen path="/party">
          <Party />
        </Screen>
        <Screen path="/status">
          <Status />
        </Screen>
        <Screen path="/battle">
          <Battle />
        </Screen>
        <Screen path="/save">
          <Save />
        </Screen>
      </main>
      <Footer />
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import './App.css'

import Battle from './components/Battle.jsx';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import Party from './components/Party.jsx';
import Status from './components/Status.jsx';

function App() {
  const [ subpage, setSubpage ] = useState('party');
  
  return (
    <>
      <NavBar onClick={setSubpage} />
      <main>
        {subpage === 'party' && <Party />}
        {subpage === 'status' && <Status />}
        {subpage === 'battle' && <Battle />}
      </main>
      <Footer />
    </>
  )
}

export default App

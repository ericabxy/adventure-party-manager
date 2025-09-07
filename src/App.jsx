import React, { useEffect, useState } from 'react'
import './App.css'

import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import Party from './components/Party.jsx';
import Status from './components/Status.jsx';

function App() {
  const [ chars, setChars ] = useState([]);
  const charData = JSON.parse(localStorage.getItem('saveData'));

  useEffect(() => {
    if (charData == null) {
      setChars([]);
    } else {
      setChars(charData);
    }
  }, [])
  
  const addChar = () => {
    const newChar = {
      id: uuidv4(),
      class: 'warrior',
      gender: 0,
      named: 'No Name',
    };
    setChars([...chars, newChar]);
    localStorage.setItem('saveData', JSON.stringify([ ...chars, newChar ]));
  };
  
  const showParty = () => {
    if (window.location.pathname === "/") {
      return <Party />
    }
  }
  
  const showStatus = () => {
    if (window.location.pathname === "/status") {
      return <Status />
    }
  }

  return (
    <>
      <NavBar />
      <main>
        {showParty()}
        {showStatus()}
      </main>
      <Footer />
    </>
  )
}

export default App

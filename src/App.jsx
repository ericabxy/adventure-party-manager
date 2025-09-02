import React from 'react'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import './App.css'

import EditParty from './components/EditParty.jsx';

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
      class: chars.length,
      gender: 0,
      named: 'No Namedd',
    };
    setChars([...chars, newChar]);
    localStorage.setItem('saveData', JSON.stringify([ ...chars, newChar ]));
  };

  return (
    <>
      <div className="container">
        <EditParty />
      </div>
    </>
  )
}

export default App

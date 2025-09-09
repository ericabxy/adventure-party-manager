import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListGroup from 'react-bootstrap/ListGroup';
import './party.css';

import AddChar from './AddChar.jsx';
import Button from './Button.jsx';

function Party () {
  const [ chars, setChars ] = useState([]);
  const charData = JSON.parse(localStorage.getItem('saveData'));
  
  const addChar = () => {
    const newChar = {
      id: uuidv4(),
      classname: 'Warrior',
      gender: 'a',
      name1: '',
    };
    setChars([...chars, newChar]);
    localStorage.setItem('saveData', JSON.stringify([...chars, newChar]));
  };
  
  const delChar = (id) => {
    /*if (!confirm('Delete this character?')) return;*/
    const saveData = chars.filter((char) => char.id !== id);
    setChars(saveData);
    localStorage.setItem('saveData', JSON.stringify(saveData));
  };
  
  const modChar = (char) => {
    let data = JSON.parse(localStorage.getItem('saveData'));
    const saveData = data.map(x => {
      if (x.id === char.id) {
        return {
          ...char
        }
      }
      return x;
    });
    localStorage.setItem('saveData', JSON.stringify(saveData));
  };

  useEffect(() => {
    if (charData == null) {
      setChars([]);
    } else {
      setChars(charData);
    }
  }, [])
  
  return (
    <>
      <div className="header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}
      >
        {chars.length < 4 &&
          <Button onClick={addChar}>Add Char</Button>
        }
      </div>
      <div className="party-list">
        {chars.map((char, x) => (
          <AddChar
            id={char.id}
            char={char}
            onDelete={delChar}
            onEdit={modChar}
          />
        ))}
      </div>
    </>
  )
}

export default Party;

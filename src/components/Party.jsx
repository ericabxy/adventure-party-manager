import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListGroup from 'react-bootstrap/ListGroup';

import Button from './Button';
import CharaAdd from './CharaAdd';
import CharaEdit from './CharaEdit';

import charaset from '../assets/charaset';

function Party () {
  const [ chars, setChars ] = useState([]);
  const charData = JSON.parse(localStorage.getItem('saveData'));
  const charasets = [
    'warrior',
    'magician',
    'healer',
    'ninja',
    'ranger',
    'monk'
  ]
  const variants = [
    'masc',
    'femme'
  ]
  
  const addChar = () => {
    const newChar = {
      id: uuidv4(),
      charaset: charasets[chars.length % charasets.length],
      variant: variants[chars.length % variants.length],
      firstname: '',
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
    <div className="party-list">
      {chars.map((char, x) => (
        <CharaEdit
          key={x}
          id={char.id}
          char={char}
          onDelete={delChar}
          onEdit={modChar}
        />
      ))}
      {chars.length < 4 &&
        <CharaAdd
          onClick={addChar}
        />
      }
    </div>
  )
}

export default Party;

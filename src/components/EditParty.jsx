import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import AddChar from './AddChar.jsx';
import Character from './Character.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

function EditParty ({  }) {
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
      named: 'No Name',
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
    window.location.reload();
  };
  
  return (
    <>
      <Header addChar={chars.length < 4 ? addChar : null} />
      <ListGroup className="my-2" horizontal>
        {chars.map((char, x) => (
          <ListGroup.Item style={{width: '25%'}}>
            <AddChar
              id={char.id}
              char={char}
              onDelete={delChar}
              onEdit={modChar}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <ListGroup>
        {chars.map((char, x) => (
          <ListGroup.Item>
            <Character char={char} />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Footer />
    </>
  )
}

export default EditParty;

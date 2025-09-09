import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ChooseClass from './ChooseClass.jsx';
import ChooseStyle from './ChooseStyle.jsx';
import Portrait from './Portrait.jsx';
import Sprite from './Sprite.jsx';

import avatars from '../assets/avatars';

function AddChar ({ char, onDelete, onEdit }) {
  const [ classname, setClassname ] = useState(char.classname);
  const [ gender, setGender ] = useState(char.gender);
  const [ name1, setName1 ] = useState(char.name1);

  // Update callback if anything has changed
  useEffect(() => {
    onEdit({
      ...char,
      classname: classname,
      gender: gender,
      name1: name1
    });
  }, [classname, gender, name1])

  return (
    <div
      style={{
        backgroundColor: 'WhiteSmoke',
        borderRadius: '.25em',
        margin: '1em 2em',
        maxWidth: '10em',
        padding: '1em'
      }}
    >
      <div>
        <ChooseClass value={classname} onClick={setClassname} />
        <ChooseStyle chara={classname} value={gender} onClick={setGender} />
        <Sprite charaset={classname} direct="south" scale="x3" variant={gender} />
        <input
          style={{width: '100%', margin: '1px 0'}}
          type="text"
          value={name1}
          placeholder="Name"
          onChange={evt => setName1(evt.target.value)}
        />
        <input
          style={{width: '100%', margin: '1px 0'}}
          type="button"
          value="Delete"
          onClick={() => onDelete(char.id)}
        />
      </div>
    </div>
  )
}

export default AddChar;

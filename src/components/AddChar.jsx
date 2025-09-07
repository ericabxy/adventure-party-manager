import React, { useEffect, useState } from 'react';

import Portrait from './Portrait.jsx';

function AddChar ({ char, onDelete, onEdit }) {
  const [ classname, setClassname ] = useState(char.classname);
  const [ gender, setGender ] = useState(char.gender);
  const [ name1, setName1 ] = useState(char.name1);
  
  useEffect(() => {
    onEdit({
      ...char,
      classname: classname,
      gender: gender,
      name1: name1
    });
  }, [classname, gender, name1])

  return (
    <>
      <div>
        <select
          style={{width: '100%'}}
          value={classname}
          onChange={evt => setClassname(evt.target.value)}
        >
          <option value="Warrior">Warrior</option>
          <option value="Magician">Magician</option>
          <option value="Healer">Healer</option>
          <option value="Ninja">Ninja</option>
          <option value="Ranger">Ranger</option>
          <option value="Monk">Monk</option>
        </select>
        <select
          style={{width: '100%'}}
          value={gender}
          onChange={evt => setGender(evt.target.value)}
        >
          <option value="0">M</option>
          <option value="1">F</option>
        </select>
        <Portrait classname={classname} gender={gender} />
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
    </>
  )
}

export default AddChar;

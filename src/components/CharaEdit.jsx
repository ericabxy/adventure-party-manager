import React, { useEffect, useState } from 'react';
import ChooseClass from './ChooseClass.jsx';
import ChooseStyle from './ChooseStyle.jsx';
import Sprite from './Sprite.jsx';

function CharaEdit ({ char, onDelete, onEdit }) {
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
    <div className="chara-edit">
      <div>
        <ChooseClass value={classname} onClick={setClassname} />
        <ChooseStyle chara={classname} value={gender} onClick={setGender} />
        <Sprite charaset={classname} direct="west" variant={gender} />
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

export default CharaEdit;

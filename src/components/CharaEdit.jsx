import React, { useEffect, useState } from 'react';
import ChooseClass from './ChooseClass.jsx';
import ChooseStyle from './ChooseStyle.jsx';
import Sprite from './Sprite.jsx';

function CharaEdit ({ char, onDelete, onEdit }) {
  const [ charaset, setCharaset ] = useState(char.charaset);
  const [ variant, setVariant ] = useState(char.variant);
  const [ firstname, setFirstname ] = useState(char.firstname);

  // Update callback if anything has changed
  useEffect(() => {
    onEdit({
      ...char,
      charaset: charaset,
      variant: variant,
      firstname: firstname
    });
  }, [charaset, variant, firstname])

  return (
    <div className="chara-edit">
      <div>
        <ChooseClass value={charaset} onClick={setCharaset} />
        <ChooseStyle chara={charaset} value={variant} onClick={setVariant} />
        <Sprite
          className={`${charaset} ${variant}`}
          dir="west"
        />
        <input
          style={{width: '100%', margin: '1px 0'}}
          type="text"
          value={firstname}
          placeholder="Name"
          onChange={evt => setFirstname(evt.target.value)}
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

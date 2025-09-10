import React, { useEffect, useState } from 'react';
import ChooseClass from './ChooseClass';
import ChooseStyle from './ChooseStyle';
import CharaSprite from './CharaSprite';

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
      <ChooseClass value={charaset} onClick={setCharaset} />
      <ChooseStyle chara={charaset} value={variant} onClick={setVariant} />
      <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
        <CharaSprite chara={char} dir="south" />
      </div>
      <input
        type="text"
        value={firstname}
        placeholder="Name"
        onChange={evt => setFirstname(evt.target.value)}
      />
      <input
        type="button"
        value="Delete"
        onClick={() => onDelete(char.id)}
      />
    </div>
  )
}

export default CharaEdit;

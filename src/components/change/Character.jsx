import React, { useEffect, useState } from 'react'
import ChooseClass from './ChooseClass'
import ChooseStyle from './ChooseStyle'
import Sprite from '../Sprite'

function Character ({ char, onDelete, onEdit }) {
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
    <div className="party-edit">
      <ChooseClass value={charaset} onClick={setCharaset} />
      <div className="party-portrait">
        <Sprite>
          {`${charaset} ${variant} west step-0`}
        </Sprite>
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

export default Character

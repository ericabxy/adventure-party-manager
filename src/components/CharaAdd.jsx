import React from 'react';
import ChooseClass from './ChooseClass.jsx';
import ChooseStyle from './ChooseStyle.jsx';
import Sprite from './Sprite.jsx';

function CharaAdd ({ onAdd }) {
  return (
    <div className="chara-add">
      <input
        style={{width: '100%', margin: '1px 0'}}
        type="button"
        value="New"
        onClick={onAdd}
      />
    </div>
  )
}

export default CharaAdd;

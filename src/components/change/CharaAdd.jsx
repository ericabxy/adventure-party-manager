import React from 'react'
import ChooseClass from './ChooseClass'
import ChooseStyle from './ChooseStyle'
import Sprite from '../Sprite'

function CharaAdd ({ onClick }) {
  return (
    <div className="party-add">
      <input
        style={{width: '100%', margin: '1px 0'}}
        type="button"
        value="New"
        onClick={onClick}
      />
    </div>
  )
}

export default CharaAdd;

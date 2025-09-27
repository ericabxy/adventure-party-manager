import React from 'react'
import SpriteFace from '../components/SpriteFace'

function Character (props) {
  const { chara, name, variant } = props
  return (
    <div>
      <SpriteFace>
        {`${chara}-${variant}`}
      </SpriteFace>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>{name || '????'}</div>
        <div>{chara.charAt(0).toUpperCase() + chara.slice(1)}</div>
        <div>Lv. 1</div>
      </div>
      <div style={{ float: 'right' }}>
        <div>HP: 20/ 20</div>
        <div>MP: 10/ 10</div>
      </div>
    </div>
  )
}

export default Character

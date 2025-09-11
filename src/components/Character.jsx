import React from 'react';
import Portrait from './Portrait.jsx';

import charaset from '../assets/charaset';

function Character ({ chara, name, variant }) {
  //
  return (
    <div>
      <Portrait className={`${chara} ${variant}`} />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>{name ? name : '?'}</div>
        <div>{chara.charAt(0).toUpperCase() + chara.slice(1)}</div>
        <div>Lv. 1</div>
      </div>
      <div style={{float: 'right'}}>
        <div>HP: 20/ 20</div>
        <div>MP: 10/ 10</div>
      </div>
    </div>
  )
}

export default Character;

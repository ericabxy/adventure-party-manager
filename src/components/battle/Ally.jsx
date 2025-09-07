import React from 'react';

import avatars from '../../assets/avatars';
import charaset from '../../assets/charaset';

function Ally ({ char }) {
  return (
    <div>
      <img
        src={avatars[char.classname][char.gender]}
        style={{float: 'left', width: '32px'}}
      />
      <div>{char.name1 ? char.name1 : '...'}</div>
      <div>20</div>
    </div>
  )
}

export default Ally;

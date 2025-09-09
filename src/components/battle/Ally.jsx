import React from 'react';
import Sprite from '../Sprite';

function Ally ({ char }) {
  return (
    <div>
      <Sprite className={`${char.classname} ${char.gender} west`} />
      <div>{char.name1 ? char.name1 : '...'}</div>
      <div><strong>HP:</strong> 20</div>
    </div>
  )
}

export default Ally;

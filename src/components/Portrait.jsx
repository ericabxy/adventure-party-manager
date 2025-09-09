import React from 'react';
import '../portrait.css';

function Portrait ({ charaset, variant }) {
  const gender = variant == 'b' ? 'femme' : 'masc';

  return (
    <div style={{float: 'left'}}>
      <img
        alt={charaset}
        className={`portrait ${charaset} ${gender}`}
        style={{width: '75px', imageRendering: 'pixelated'}}
      />
    </div>
  )
}

export default Portrait;

import React from 'react';
import '../portrait.css';

import image from '../assets/react.svg';

function Portrait ({ charaset, variant }) {
  const gender = variant == 'b' ? 'femme' : 'masc';
  const onClick = evt => {
    console.log(evt);
  }

  return (
    <div className={`portrait ${charaset} ${gender}`} style={{float: 'left'}}>
    </div>
  )
}

export default Portrait;

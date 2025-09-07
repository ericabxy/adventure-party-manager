import React from 'react';

import portraits from '../assets/portraits';

function Portrait ({ classname, gender }) {
  return (
    <img
      style={{width: '100%', margin: '1px 0'}}
      src={portraits[classname][gender]}
    />
  )
}

export default Portrait;

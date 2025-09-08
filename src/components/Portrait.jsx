import React from 'react';

import charaset from '../assets/charaset';

function Portrait ({ classname, gender }) {
  return (
    <img
      style={{width: '100%', margin: '1px 0'}}
      src={charaset[classname]['portrait'][gender]}
    />
  )
}

export default Portrait;

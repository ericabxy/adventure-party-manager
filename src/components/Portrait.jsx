import React from 'react';

import avatars from '../assets/avatars';
import charaset from '../assets/charaset';
import faces from '../assets/faces';

function Portrait ({ classname, gender }) {
  const image = faces[classname][gender];

  return (
    <img className="portrait"
      alt={classname}
      src={image}
    />
  )
}

export default Portrait;

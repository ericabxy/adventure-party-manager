import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';

import skeleton1 from '../../assets/skeleton_1.png';

function Enemies ({  }) {
  const targetlist = [
    skeleton1,
    skeleton1,
    skeleton1,
    skeleton1,
    skeleton1
  ]

  return (
    <>
      <div style={{
          backgroundColor: 'black',
          display: 'grid',
          flexDirection: 'column',
          flexWrap: 'wrap'
        }}
      >
        {targetlist.map((image) => (
          <div style={{}}>
            <Image
              src={image}
              style={{border: '1px dashed white'}}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Enemies;

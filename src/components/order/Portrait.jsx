import React, { useEffect, useState } from 'react';

function Portrait ({ charaset, variant }) {
  const [ something, setSomething ] = useState();
  
  useEffect(() => {
  }, [])

  return (
    <div
      className={`
        portrait
        ${charaset}
        ${variant}
      `}
    >
    </div>
  )
}

export default Portrait;

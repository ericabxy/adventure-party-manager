import React from 'react';

function Portrait ({ className, variant }) {
  console.log(className, variant);
  return (
    <div className={`portrait left ${className} ${variant}`}>
    </div>
  )
}

export default Portrait;

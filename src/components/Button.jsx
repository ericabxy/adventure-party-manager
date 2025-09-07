import React from 'react';

function Button (props) {
  return (
    <input 
      style={{
        padding: '0 1em'
      }}
      type="button"
      value={props.children}
      onClick={props.onClick}
    />
  )
}

export default Button;

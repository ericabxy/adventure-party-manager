import React from 'react';

import portraits from '../assets/portraits';

function ChooseStyle ({ id, value, onClick }) {
  /* Originally "male" and "female" styles. */
  return (
    <>
      {/*<input type="radio" name={id} value="0" checked={value == 0} onChange={evt => onClick(evt.target.value)} />
      <input type="radio" name={id} value="1" checked={value == 1} onChange={evt => onClick(evt.target.value)} />*/}
      <select
        style={{width: '100%'}}
        value={value}
        onChange={evt => onClick(evt.target.value)}
      >
        <option value="0">M</option>
        <option value="1">F</option>
      </select>
    </>
  )
}

export default ChooseStyle;

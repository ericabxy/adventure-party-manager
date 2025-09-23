import React from 'react'

import Slot from './Slot'

function Character ({ name }) {
  const hand = [
    'sword',
    'shield'
  ];
  const head = [
    'hat',
    'helm'
  ];
  const body = [
    'cuirass',
    'shirt'
  ];

  return (
    <div className="input-group mb-3">
      <span class="input-group-text">{name}</span>
      <Slot key="rhand" choices={hand}>RHand</Slot>
      <Slot key="lhand" choices={hand}>LHand</Slot>
      <Slot key="head" choices={head}>Head</Slot>
      <Slot key="body" choices={body}>Body</Slot>
    </div>
  )
}

export default Character

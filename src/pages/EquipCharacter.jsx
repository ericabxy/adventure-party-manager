import React from 'react'

import EquipSlot from './EquipSlot'

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
      <span className="input-group-text">{name}</span>
      <EquipSlot key="rhand" choices={hand}>RHand</EquipSlot>
      <EquipSlot key="lhand" choices={hand}>LHand</EquipSlot>
      <EquipSlot key="head" choices={head}>Head</EquipSlot>
      <EquipSlot key="body" choices={body}>Body</EquipSlot>
    </div>
  )
}

export default Character

import React from 'react'

function Battlefield (props) {
  const { party } = props
  return (
    <div className="battlefield">
      {party.map((element, x) => (
        <div
          className={`sprite-attack sprite-attack--${element.charaset}-${element.variant} sprite--a sprite--3`}
          key={x}
        />
      ))}
    </div>
  )
}

export default Battlefield

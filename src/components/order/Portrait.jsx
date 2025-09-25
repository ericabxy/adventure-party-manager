import React from 'react'

function Portrait ({ charaset='warrior', variant }) {
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

export default Portrait

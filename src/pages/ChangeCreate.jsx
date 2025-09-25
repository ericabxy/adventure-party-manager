import React from 'react'

function ChangeCreate ({ onClick }) {
  return (
    <div className="party-add">
      <input
        style={{width: '100%', margin: '1px 0'}}
        type="button"
        value="New"
        onClick={onClick}
      />
    </div>
  )
}

export default ChangeCreate

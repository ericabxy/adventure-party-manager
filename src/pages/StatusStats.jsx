import React from 'react'

function Stats (props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <dl>
            <dt>Strength</dt>
            <dd>20</dd>
            <dt>Speed</dt>
            <dd>5</dd>
          </dl>
        </div>
        <div className="col">
          <dl>
            <dt>Accuracy</dt>
            <dd>10%</dd>
            <dt>Evasion</dt>
            <dd>53%</dd>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Stats

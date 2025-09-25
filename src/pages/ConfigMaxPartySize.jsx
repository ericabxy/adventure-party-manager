import React from 'react'
import Radio from '../components/Radio'

function ConfigMaxPartySize (props) {
  return (
    <fieldset className="input-group">
      <span className="input-group-text">Maximum Party Size</span>
      <div className="list-group list-group-horizontal">
        <Radio id="three" name="maxpartysize" value="3" />
        <Radio id="four" name="maxpartysize" value="4" />
        <Radio id="five" name="maxpartysize" value="5" />
      </div>
    </fieldset>
  )
}

export default ConfigMaxPartySize

import React from 'react'

function Save (props) {
  const jsonData = new Blob(
    [localStorage.getItem('saveData')],
    {type: 'application/json'}
  );
  const jsonUrl = URL.createObjectURL(jsonData); 

  return (
    <>
      <a href={jsonUrl}>right-click to save party to disk</a>
    </>
  )
}

export default Save

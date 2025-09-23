import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

function Save (props) {
  const jsonData = new Blob(
    [localStorage.getItem('saveData')],
    {type: 'application/json'}
  );
  const jsonUrl = URL.createObjectURL(jsonData); 

  return (
    <>
      <h3>Save</h3>
      <ListGroup>
        <ListGroup.Item>Save1</ListGroup.Item>
        <ListGroup.Item>Save2</ListGroup.Item>
        <ListGroup.Item>Save3</ListGroup.Item>
        <ListGroup.Item>Save4</ListGroup.Item>
      </ListGroup>
      <a href={jsonUrl}>right-click to save party to disk</a>
    </>
  )
}

export default Save

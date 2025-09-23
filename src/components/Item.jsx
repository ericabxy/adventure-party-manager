import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import Header from './Header'
import Sprite from './Sprite'

function Item (props) {
  return (
    <>
      <h3>Item</h3>
      <ListGroup>
      </ListGroup>
      <ListGroup>
        You have nothing.
      </ListGroup>
    </>
  )
}

export default Item

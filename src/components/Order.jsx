import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

function Order () {
  // Change the display position of characters
  const [ characters, setCharacters ] = useState([]);
  const data = JSON.parse(localStorage.getItem('saveData'));
  const [ isDataLoaded, setIsDataLoaded ] = useState(false);

  useEffect(() => {
    if (data == null) {
      setCharacters([]);
    } else {
      setCharacters(data);
    }
  }, [])

  useEffect(() => {
    if (isDataLoaded) {
      localStorage.setItem('saveData', JSON.stringify(characters));      
    } else if (characters.length > 0) {
      setIsDataLoaded(true);
    }
  }, [characters])

  const onChange = evt => {
    const src = evt.target.attributes.id.value;
    const dest = evt.target.value;
    const neworder = characters.map((_, x) => {
      if (x == src) {
        return dest;
      } else if (x == dest) {
        return src;
      } else {
        return x;
      }
    })
    console.log(neworder);
    const newdata = neworder.map((x) => {
      return characters[x];
    })
    console.log(newdata);
    setCharacters([...newdata]);
    console.log(characters);
  }
  
  const options = characters.map((element, x) => (
    <option key={element.id} value={x}>{element.firstname}</option>
  ))

  const listItems = characters.map((element, x) => {
    return (
      <div className="input-group" key={element.id}>
        <div className={`portrait ${element.charaset} ${element.variant}`} />
        <select
          className="form-select"
          id={x}
          key={element.id}
          onChange={onChange}
          value={x}
        >
          {options}
        </select>
      </div>
    )
  })

  return (
    <ListGroup>
      {listItems}
    </ListGroup>
  )
}

export default Order

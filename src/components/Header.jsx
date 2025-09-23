import React from 'react'

function Header ({ children, title }) {
  return (
    <header className="App-header">
      <h3>{title}</h3>
      <p>{children}</p>
    </header>
  )
}

export default Header

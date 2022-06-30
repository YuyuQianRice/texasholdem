import React from 'react'

const Header = (props) => {
  return (
    <header>
        <h1>Texas Holdem Pocker</h1>
        <p>Hello: {props.playerName}</p>
    </header>
  )
}

Header.defaultProps = {
    playerName: "Visitor",
}

export default Header
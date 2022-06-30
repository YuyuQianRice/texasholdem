import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Joingame = ({updatePlayerName}) => { 
  const [playerNameState, setPlayerNameState] = React.useState("")


  const handleOnChange = event => {
    event.preventDefault();
    setPlayerNameState(event.target.value);
    // console.log(event.target.value);
  };

  const handleSubmit = event => {
      event.preventDefault();
      updatePlayerName(playerNameState)
      console.log(playerNameState + " has joined the game.");
      setPlayerNameState('');
  };
    
  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>player name</Form.Label>
                <Form.Control value={playerNameState} type="username" placeholder='Jone/Jane Doe' onChange={handleOnChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Join Now
            </Button>
        </Form>
    </div>
  )
}

export default Joingame
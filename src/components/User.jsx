import { Button, Typography} from '@material-ui/core'
import React, { useState } from 'react'

const User = ({ name, func, muifunc }) => {

  const [num, setNum] = useState(5);

  const incNum = () => {
    setNum(num+5);
  }
  
  const decNum = () => {
    setNum(num-5);
  }

  return (
    <>
      <Typography variant="h1">This is a Typography component</Typography>
      <h1>This is the User component</h1>
      <p>Number: {num}</p>
      {/* Material UI button */}
      <Button onClick={incNum} variant="contained" color="primary">Increase Age</Button>
      <Button onClick={decNum} variant="contained" color="secondary">Decrease Age</Button>      
      <br />
      {/* Normal button */}
      <button onClick={func}>Click me</button>
    </>

  )
}

export default User;
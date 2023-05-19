import { Button} from '@material-ui/core'
import React from 'react'

export const User = ({name, func, muifunc}) => {
  return (
    <>
      <h1>This is the User component</h1>
      {/* Material UI button */}
      <Button onClick={muifunc} variant="contained" color="green">MUI Button</Button>
      <br />
      {/* Normal button */}
      <button onClick={func}>Click me</button>
    </>

  )
}

export default User
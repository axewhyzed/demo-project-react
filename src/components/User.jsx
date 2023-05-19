import React from 'react'

export const User = ({name, func}) => {
  return (
    <>
      <h1>This is the User component</h1>
      <button onClick={func}>Click me</button>
    </>

  )
}

export default User
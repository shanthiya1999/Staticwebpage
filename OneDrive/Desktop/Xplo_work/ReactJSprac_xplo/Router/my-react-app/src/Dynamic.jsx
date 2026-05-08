import React from 'react'
import { NavLink } from 'react-router'

function Dynamic() {
  return (
    <div>
        <h1>This is the Dynamic page</h1>
        <NavLink to='/users/1'>User 1</NavLink>
        <NavLink to='/users/2'>User 2</NavLink> 
      
    </div>
  )
}

export default Dynamic

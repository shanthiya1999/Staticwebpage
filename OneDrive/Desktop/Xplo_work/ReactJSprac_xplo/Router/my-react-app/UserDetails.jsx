import React from 'react'
import { useParams } from 'react-router'

function UserDetails() {
    const params=useParams()
    console.log(params);
    
  return (
    <div>
      <h1>This is the USerDetails page {params.id}</h1>
    </div>
  )
}

export default UserDetails

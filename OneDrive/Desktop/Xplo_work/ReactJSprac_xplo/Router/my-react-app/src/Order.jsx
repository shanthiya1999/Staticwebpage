import React from 'react'
import { useNavigate } from 'react-router'

function Order() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <h2>Successfully ordered</h2>
      <button onClick={handleBack}>Back</button>
    </div>
  )
}

export default Order

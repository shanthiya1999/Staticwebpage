import React from 'react'
import { useNavigate } from 'react-router'

function About() {
  const navigate = useNavigate()

  const handleGoToOrder = () => {
    navigate('/order')
  }

  return (
    <div>
      <h1>About</h1>
      <button onClick={handleGoToOrder}>Go to Order</button>
    </div>
  )
}

export default About

import React from 'react'
import { NavLink, Outlet } from 'react-router'

function Dashboard() {
  return (
    <div>
      <nav>
        <NavLink to='features'>Features</NavLink>
        <NavLink to='pricing'>Pricing</NavLink>
        <NavLink to='settings'>Settings</NavLink>
      </nav>
        <Outlet />
    </div>
  )
}

export default Dashboard

import React from 'react'
import "./Dashboard.css"

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='head'>
      <h3>Welcome Admin</h3>
            <input className='search1' type="text" placeholder='Search'/>
      </div>
      <p>Dashboard</p>
      <div className='maincard'>
        <div className='card'> <h5>Overall Engagement</h5></div>
        <div className='card'> <h5>Points Scored</h5> <h3>3200</h3></div>
        <div className='card'> <h5>Rank Score</h5> <h3>125</h3></div>


      </div>

    </div>
    
  )
}
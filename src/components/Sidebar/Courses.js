import React from 'react'
import "./Courses.css"

function Courses() {
  return (
    <div className='courses'>
        <div className='head'>
            <h3>Welcome Admin</h3>
            <input className='search' type="text" placeholder='Search'/>
        </div>
       
        <div className='card1'>
            <p>Add Catogery</p>
            <input/>
            <input/>
                <button>Submit</button>
            
        </div>
    </div>

  )
}

export default Courses
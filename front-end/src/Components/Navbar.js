import React from 'react'
import "./Navbar.css"
// import {Button} from '@mui/material';
import{FaUserAlt} from 'react-icons/fa'
// import { TextField } from '@mui/material';
function Navbar() {
  return (
    // <div className='hello'>
    <div className='nav-align'>
        <input type="text" className='abc' placeholder='Search...'></input>
        <FaUserAlt className='user-icon'/>

    </div>

    // {/* </div> */}
  )
}

export default Navbar

import React from 'react'
import "./Navbar.css"
<<<<<<< HEAD
import{FaUserAlt} from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";
import LoginMenu from './LoginMenu';


function showElement() {
  var element =document.getElementById("display-menu");
  if (element.style.display === "none") {
    element.style.display = "inline";
  } else {
    element.style.display = "none";
  }
}

function Navbar() {
  
  const { loginWithRedirect, isAuthenticated,user } = useAuth0();
  return (

<div className='nav-align'>
<input type="text" className='abc' placeholder='Search...'></input>

{isAuthenticated && (
  <p className='user-name'>{user.name}</p>
)}

{isAuthenticated ? (<FaUserAlt onClick={showElement} className='user-icon'/>) : (
<FaUserAlt onClick={() => loginWithRedirect()} className='user-icon'/>)}

<LoginMenu/>



</div>
=======
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
>>>>>>> 8b033441aab83fc22bc0345696c95e46fa0f863d
  )
}

export default Navbar

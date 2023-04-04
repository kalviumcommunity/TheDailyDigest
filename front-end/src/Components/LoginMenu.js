import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import log from "../assets/logout.png"
import mail from "../assets/mail.png"
import saved from "../assets/saved.png"
import "./LoginMenu.css"


function LoginMenu() {

  const { user, logout, isAuthenticated  } = useAuth0();
  
    function handleClick() {
      const mailToLink = "mailto:thedailydigest@gmail.com";
      window.location.href = mailToLink;
    }
  

    const myStyle = {
        display: 'none'
      };

  return (
    <div className='action' id='display-menu' style={myStyle}>
        <div className='menu'>
            <div className='avatar-div'>
                {isAuthenticated&&
            <img className='avatar' src={user.picture}  />}
            </div>
            {isAuthenticated&&
            <h3>{user.name}</h3>}
            <ul>
                <li><img src={saved} alt='img'/><a>Saved</a></li>
                <li><img src={mail} alt='img'/><a  onClick={handleClick}>Feedback</a></li>
                <li><img src={log} alt='img'/><a onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</a></li>
            </ul>
        </div>
    </div>
  )
}

export default LoginMenu

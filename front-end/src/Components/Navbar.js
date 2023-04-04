import React from "react";
import "./Navbar.css";
import { FaUserAlt } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import LoginMenu from "./LoginMenu";

function showElement() {
  var element = document.getElementById("display-menu");
  if (element.style.display === "none") {
    element.style.display = "inline";
  } else {
    element.style.display = "none";
  }
}

function Navbar(props) {

  const handleSearch = (event) => {
    props.setSearchbar(event.target.value);
  };

  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <div className="nav-align">
      <input className="abc" type="text" placeholder="Search news" onChange={handleSearch} />
      {isAuthenticated && <p className="user-name">{user.name}</p>}

      {isAuthenticated ? (
        <FaUserAlt onClick={showElement} className="user-icon" />
      ) : (
        <FaUserAlt onClick={() => loginWithRedirect()} className="user-icon" />
      )}

      <LoginMenu />
    </div>
  );
}

export default Navbar;




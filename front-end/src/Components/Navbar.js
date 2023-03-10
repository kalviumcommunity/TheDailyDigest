
import './Navbar.css'
import React from "react";
import logo1 from "../assets/logo1.png"
import {  Link } from 'react-router-dom';
import ars from "../assets/ars.png"
import tnw from "../assets/tnw.png"
import eng from "../assets/eng.png"
import muo from "../assets/muo.png"
import vent from "../assets/vent.png"
import giz from "../assets/giz.png"
import digi from "../assets/digi.png"
import verge from "../assets/verge.png"
import police from "../assets/police.png"
import andr from "../assets/andr.png"






const Navbar = ()=>{
    return(
        <div className="list">
            
<div className="ding">
      < a className="menu-item" href="">
        <img src={logo1}/>   
      </a>
      
      </div>
      
     
      <div className="sublist">


      <Link to={"/androidauthority"}>
        <div className="outer-div">
        <img src={andr}/>
        </div>
        </Link>
           
          <Link to={"/tnw"}>
          <div className="outer-div">
        <img src={tnw}/>
        </div>
          </Link>

        <Link to={"/engadget"}>
        <div className="outer-div">
        <img src={eng}/>
        </div>
        </Link>


        <Link to={"/androidpolice"}>
        <div className="outer-div">
        <img src={police}/>
        </div>
        </Link>

        <Link to={"/venture"}>
        <div className="outer-div">
        <img src={vent}/>
        </div>
        </Link>
        <Link to={"/gizmodo"}>
        <div className="outer-div">
        <img src={giz}/>
        </div>
        </Link>
        <Link to={"/arstechnica"}>
          <div className="outer-div">
              <img src={ars}/>
              </div>
          </Link>

        <Link to={"/theverge"}>
        <div className="outer-div">
        <img src={verge}/>
        </div>
        </Link>
        <Link to={"/muo"}>
        <div className="outer-div">
        <img src={muo}/>
        </div>
        </Link>


      <Link to={"/digitaltrends"}>
        <div className="outer-div">
        <img src={digi}/>
        </div>
        </Link>


      </div>
      
      <div>

      <p>© All Rights Reserved</p>
      </div>

        </div>

    )

}





export default Navbar;
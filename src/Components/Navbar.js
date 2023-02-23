import React from "react";
import logo1 from "../assets/logo1.png"
import ars from "../assets/ars.png"
import tnw from "../assets/tnw.png"
import eng from "../assets/eng.png"
import crunch from "../assets/crunch.png"
import vent from "../assets/vent.png"
import giz from "../assets/giz.png"
import wir from "../assets/wir.png"
import verge from "../assets/verge.png"
import tech from "../assets/tech.png"
import andr from "../assets/andr.png"

import "./Navbar.css"

function Navbar(){
    return(
        <div className="list">
            
<div className="ding">
      < a className="menu-item" href="">
        {/* <img src={logo1}/>    */}
        <h3><span>T</span>HE <span>D</span>AILY <span>D</span>IGEST</h3>
      </a>
      </div>
      
     
      <div className="sublist">

        <a className="menu-item" href="">
            <div className="outer-div">
            <img src={ars}/>
            </div>
        
      </a>

      <a className="menu-item" href="">
        <div className="outer-div">
        <img src={tnw}/>
        </div>
      </a>
      <a className="menu-item" href="">
        <div className="outer-div">
        <img src={eng}/>
        </div>
      </a>
      <a className="menu-item" href="">
        <div className="outer-div">
        <img src={crunch}/>
        </div>
      </a>
      <a className="menu-item" href="">
        <div className="outer-div">
        <img src={vent}/>
        </div>
      </a>
      <a className="menu-item" href="">
        <div className="outer-div">
        <img src={giz}/>
        </div>
      </a>
      <a className="menu-item" href="">
        <div className="outer-div">
        <img src={wir}/>
        </div>
      </a>
      <a className="menu-item" href="">
      <div className="outer-div">
        <img src={verge}/>
        </div>
      </a>
      <a className="menu-item" href="">
        <div className="outer-div">
        <img src={tech}/>
        </div>
      </a>
      <a className="menu-item" href="">
        <div className="outer-div">
        <img src={andr}/>
        </div>
      </a>
      </div>
      
      <div>

      <p>© All Rights Reserved</p>
      </div>

        </div>

    )

}





export default Navbar;
import React from 'react'
import logo1 from "../assets/logo1.png"
import { Link } from 'react-router-dom'
import './Sidebar.css'
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
import { FaBars, FaTimes } from "react-icons/fa";

function Sidebar() {
  return (
    <div>
        <input type="checkbox" id='check'/>
        <label for="check">
           <FaBars id='btn'/>
            <FaTimes id='cancel'/>
        </label>
        <div className='sidebar'>
            <header>
              
              <Link to={"/"}>      
              <img src={logo1}/>   
      </Link>
            
     
  
      
      
            </header>
            <ul>
                <li>
                <Link to={"/androidauthority"}>
        <div className="outer-div">
        <img src={andr}/>
        </div>
        </Link></li>


           
        <li>          
          <Link to={"/tnw"}>
          <div className="outer-div">
        <img src={tnw}/>
        </div>
          </Link></li>

          <li>
          <Link to={"/engadget"}>
        <div className="outer-div">
        <img src={eng}/>
        </div>
        </Link>
        </li>

        <li>
            
        <Link to={"/androidpolice"}>
        <div className="outer-div">
        <img src={police}/>
        </div>
        </Link>
        </li>

        <li>

        <Link to={"/venture"}>
        <div className="outer-div">
        <img src={vent}/>
        </div>
        </Link>
        </li>

        <li>
        <Link to={"/gizmodo"}>
        <div className="outer-div">
        <img src={giz}/>
        </div>
        </Link>
        </li>
        <li>

        <Link to={"/arstechnica"}>
          <div className="outer-div">
              <img src={ars}/>
              </div>
          </Link>
        </li>

       <li>
       <Link to={"/theverge"}>
        <div className="outer-div">
        <img src={verge}/>
        </div>
        </Link>
        </li>

        <li>

        <Link to={"/muo"}>
        <div className="outer-div">
        <img src={muo}/>
        </div>
        </Link>
        </li>


<li>



<Link to={"/digitaltrends"}>
        <div className="outer-div">
        <img src={digi}/>
        </div>
        </Link>

</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
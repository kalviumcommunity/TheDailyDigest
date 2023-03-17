import React from 'react'
import pre from "../assets/pre-logo.png"
import { Bars  } from 'react-loader-spinner'
import "./Preloader.css"

function Preloader() {
  return (
    <div className='preloader'>
        <div><img alt="hi" src={pre}></img></div>
        <div>
        <Bars
  height="30"
  width="30"
  color="white"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass="grid"
  visible={true}
/>
        </div>
  </div>
  )
}

export default Preloader

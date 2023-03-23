import React from 'react'
import pre from "../assets/pre-logo.png"
import { Bars  } from 'react-loader-spinner'
import "./Preloader.css"

function Preloader() {
  return (
    <div className='preloader'>
        <div><img alt="hi" src={pre}></img></div>
        <div className='grid-none'>
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

<<<<<<< HEAD
export default Preloader
=======
export default Preloader
>>>>>>> 8b033441aab83fc22bc0345696c95e46fa0f863d

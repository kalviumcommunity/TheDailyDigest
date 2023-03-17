import React from 'react'
import "./Home.css"
import bg from "../assets/bg.png"

function Home() {
  return (
    <div>
        <h1>Keeping you <br/> in the know, 24 7 </h1><br/>
        <p className='home-para'>Hey there! "The Daily Digest" is an innovative web application <br/> 
        that provides up-to-the-minute technology news from around<br/> 
         the world. We curate the most current and noteworthy news stories<br/> 
          from a wide range of sources, ensuring that our users have access<br/> 
           to the most comprehensive and diverse coverage available.<br/> <br/> 
            So why wait? Start surfing through the sites listed and discover<br/>
             the latest and greatest in the world of technology.</p>

             <img src={bg} className="home-bg"></img>

    </div>
  )
}

export default Home

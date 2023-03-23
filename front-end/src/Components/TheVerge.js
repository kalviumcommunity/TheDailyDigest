import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';


const Verge = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const preLoader =async()=>{
      const response = await axios.get(`${process.env.REACT_APP_RSSFEED}/theverge`)
      setData(response.data.feed.entry);
      setLoading(false);

      
    };
    preLoader();
  }, []);



  return (  
    <div>
              {loading ? (
          <Backdrop  className="back-drop-visibility" open={loading}>






          <CircularProgress color="inherit" />
        </Backdrop>

      ) : (
      data.map((item, index) => {
      const date=item.published[0].slice(0,10)
      console.log(date)
       const images = 'https://res.cloudinary.com/diuq0mz3b/image/upload/v1678421711/istockphoto-1335050734-612x612_x3mdtm.jpg'
       const regex = /src="([^"]+)"/;
       const imageLink = item.content[0]._;
    
       const matches = imageLink.match(regex);
       let src;
       if (matches==null){
        src =images;
       }
       else{
        src=matches[1]
       }

       console.log(src)
       return( <div className="news" key={index}>

          <img className="img" src={src} alt="hi"></img>

          <a className="anchor-tag" href={item.link[0].$.href} target="_blank" rel="noreferrer">{item.title[0]}</a>
          <p className="para">Uploaded on {date}</p>

        </div>
);
      })
      )}
    </div>
  )}



export default Verge;
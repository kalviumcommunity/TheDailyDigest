import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';


const Verge = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  console.log(data)


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
        <Backdrop open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>

      ) : (
      data.map((item, index) => {
       const regex = /src="([^"]+)"/;
       const imageLink = item.content[0]._;
    
       const matches = imageLink.match(regex);
       let src =matches[1];
       return( <div className="news" key={index}>

          <img className="img" src={src} alt="hi"></img>

          <a className="anchor-tag" href={item.link[0].$.href} target="_blank" rel="noreferrer">{item.title[0]}</a>
          <p className="para">Uploaded on {item.published}</p>

        </div>
);
      })
      )}
    </div>
  )}



export default Verge;

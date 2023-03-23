import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';


const Ars = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const preLoader =async()=>{
      const response = await axios.get(`${process.env.REACT_APP_RSSFEED}/arstechnica`)
      setData(response.data.rss.channel[0].item);
      setLoading(false);
    };
    preLoader();
  }, []);


  return (  
    <div>

            {loading ? (
<<<<<<< HEAD
        <Backdrop  className="back-drop-visibility" open={loading}>
=======
          <Backdrop  className="back-drop-visibility" open={loading}>
>>>>>>> 8b033441aab83fc22bc0345696c95e46fa0f863d
          <CircularProgress color="inherit" />
        </Backdrop>

      ) : (
      data.map((item, index) => {
        const date=item.pubDate[0].slice(0,22)
      
        const regex = /<img\s+src="([^"]+)"/;
        const imageLink = item.encoded[0];
        const matches = imageLink.match(regex);
        const src = matches[1];
        console.log(src)
        return (<div className="news" key={index}>
          <img className="img" src={src} alt="hi"></img>
          <a className="anchor-tag" href={item.link} target="_blank" rel="noreferrer">{item.title[0]}</a>
<<<<<<< HEAD
          <p className="para">Uploaded on {date}</p>          {/* <hr></hr> */}
=======
          <p className="para">Uploaded on {item.pubDate}</p>
          {/* <hr></hr> */}
>>>>>>> 8b033441aab83fc22bc0345696c95e46fa0f863d
        </div>
        );
      })
      )}
    </div>
  );
} 

export default Ars;
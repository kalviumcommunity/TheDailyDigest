import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';


const Giz = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const preLoader =async()=>{
      const response = await axios.get("http://localhost:3001/gizmodo")
      setData(response.data.rss.channel[0].item);
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
        const imageLink = item.description[0];
        const matches = imageLink.match(regex);
        let src = matches[1];
        console.log(src)
        if (!src.endsWith('.jpg') && !src.endsWith('.png')) { 
          src = 'https://res.cloudinary.com/diuq0mz3b/image/upload/v1678421711/internet-information-technology-businessman-hand-showing-concept-75784736_qj7xhg.jpg'; 
        }
        return( <div className="news" key={index}>
          <img className="img" src={src} alt="hi"></img>
          <h2>{item.title[0]}</h2>
          <p className="para">Uploaded on {item.pubDate}</p>
          {/* <hr></hr> */}
        </div>
        );
      })
      )}
    </div>
  );
}
export default Giz;
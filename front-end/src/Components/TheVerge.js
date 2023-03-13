import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';


const Verge = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  // console.log(data)


  useEffect(() => {

    const preLoader =async()=>{
      const response = await axios.get("http://localhost:3001/theverge")
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
       let src =matches;
       console.log(src)

       return( <div className="news" key={index}>

          <img className="img" src={src} alt="hi"></img>

          <h2>{item.title}</h2>
          <p className="para">Uploaded on {item.published}</p>

        </div>
);
      })
      )}
    </div>
  )}



export default Verge;

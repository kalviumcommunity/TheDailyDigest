import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';


const Tnw = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const preLoader =async()=>{
      const response = await axios.get("http://localhost:3001/tnw")
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
        return(
        <div className="news" key={index}>
          <img className="img" src={item.enclosure[0].$.url} alt="hi"></img>
          <h2 className="h2">{item.title[0]}</h2>
          <p className="para">Uploaded on {item.pubDate}</p>



        </div>
      );
        })
      )}
          </div>
  );
};

export default Tnw;
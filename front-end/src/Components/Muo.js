import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';


const Muo = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {

    const preLoader =async()=>{
      const response = await axios.get(`${process.env.REACT_APP_RSSFEED}/muo`)
      setData(response.data.rss.channel[0].item);
      setLoading(false);
    };
    preLoader();
  }, []);

  useEffect(()=>{

    setSearchQuery(props.searchbar)
  
  
    } ,[props.searchbar])
  
  
    const filteredData = data.filter((item) =>
      item.title[0].toLowerCase().includes(searchQuery.toLowerCase())
    );


  return (  
    <div>

            {loading ? (
        <Backdrop  className="back-drop-visibility" open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>

      ) : (
        filteredData.map((item, index) => {
        const date=item.pubDate[0].slice(0,22)
        return (<div className="news" key={index}>
          <img className="img" src={item.enclosure[0].$.url} alt="hi"></img>
          <a className="anchor-tag" href={item.link} target="_blank" rel="noreferrer">{item.title[0]}</a>
          <p className="para">Uploaded on {date}</p>          
        </div>
        );
      })
      )}
    </div>
  );
} 

export default Muo;
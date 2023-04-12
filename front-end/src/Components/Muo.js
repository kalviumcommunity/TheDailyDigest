import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import ShareModal from "./ShareModal";
import { IoMdHeart,IoMdShare } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import noresult from "../assets/noresult.png"

const Muo = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");


  const [color, setColor] = useState({});
  const { isAuthenticated } = useAuth0();

  function showModal() {
    var modal = document.getElementById("share-modal");
    if (modal.style.display === "none") {
      modal.style.display = "inline";
    }
  }

  function toggleSaveButton(index) {
    if (!isAuthenticated) {
      toast.error("Log in to continue.", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
    } else {
      setColor({...color, [index]: !color[index]});
    }
  }

  function handleShareButton() {
    if (!isAuthenticated) {
      toast.error("Log in to continue.", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
    } else {
      showModal();
    }
  }

  


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

      ) : filteredData.length > 0 ? (
        filteredData.map((item, index) => {
        const date=item.pubDate[0].slice(0,22)
        return (<div className="news" key={index}>
          <ShareModal />
          <img className="img" src={item.enclosure[0].$.url} alt="hi"></img>
          <a className="anchor-tag" href={item.link} target="_blank" rel="noreferrer">{item.title[0]}</a>
          <div className="para">
              <IoMdHeart onClick={() => toggleSaveButton(index)}  className="saveButton"
                style={{color: color[index] ? "red" : "black"}} />
              <IoMdShare onClick={handleShareButton} className="shareButton"  />

              <p >Uploaded on {date}</p>
              </div>          
        </div>
        );
      })
      ) : (
        <div className="noresult" >
            <img src={noresult}></img>
        </div>
      
      )}
      <ToastContainer />
    </div>
  );
} 

export default Muo;


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

const Android = (props) => {

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
  

  

  console.log(data)

  useEffect(() => {
    console.log("env: ", process.env.REACT_APP_RSSFEED)
    const preLoader =async()=>{
      const response = await axios.get(`${process.env.REACT_APP_RSSFEED}/androidauthority`)
      setData(response.data.rss.channel[0].item);
      setLoading(false);
    };
    preLoader();
  }, []);

  const handleOnClick = (link) => {
    window.open(link,'_blank');
  };

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
          return(      
            <div className="news" key={index}>
              <ShareModal />
              <img className="img" src={item.content[0].$.url} alt="hi"></img>
              <h2 className="anchor-tag" onClick={() => handleOnClick(item.link[0])}>
                {item.title[0]}
              </h2>
              <div className="para">
              <IoMdHeart onClick={() => toggleSaveButton(index)}  className="saveButton"
                style={{color: color[index] ? "red" : "black"}} />
              <IoMdShare onClick={handleShareButton} className="shareButton"  />

              <p >Uploaded on {date}</p>
              </div>

            </div>
          );
        })
      )}
                    <ToastContainer/>
    </div>
  );
};

export default Android;

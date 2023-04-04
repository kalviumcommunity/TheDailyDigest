import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import share from "../assets/share.png"
import save from "../assets/save.png"
import ShareModal from "./ShareModal";
import { IoMdBookmark,IoMdShare } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tnw = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
    const preLoader = async () => {
      const response = await axios.get(`${process.env.REACT_APP_RSSFEED}/tnw`)
      setData(response.data.rss.channel[0].item);
      setLoading(false);
    };
    preLoader();
  }, []);

  return (
    <div>
      {loading ? (
        <Backdrop className="back-drop-visibility" open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        data.map((item, index) => {
          const date = item.pubDate[0].slice(0, 22)
          return (
            <div className="news" key={index}>
              <ShareModal />
              <img className="img" src={item.enclosure[0].$.url} alt="hi"></img>
              <a className="anchor-tag" href={item.link} target="_blank" rel="noreferrer">{item.title[0]}</a>
              <IoMdShare onClick={handleShareButton} className="shareButton" src={share} />
              <IoMdBookmark onClick={() => toggleSaveButton(index)}  className="saveButton" src={save} 
                style={{color: color[index] ? "rgb(255,216,0)" : "black"}} />
              <p className="para">Uploaded on {date}</p>
            </div>
          );
        })
      )}
      <ToastContainer />
    </div>
  );
};

export default Tnw;

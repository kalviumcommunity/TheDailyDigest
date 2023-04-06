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


const Verge = (props) => {
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
      const response = await axios.get(`${process.env.REACT_APP_RSSFEED}/theverge`)
      setData(response.data.feed.entry);
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
        <ShareModal/>

          <img className="img" src={src} alt="hi"></img>

          <a className="anchor-tag" href={item.link[0].$.href} target="_blank" rel="noreferrer">{item.title[0]}</a>
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
      <ToastContainer />
    </div>
  )}



export default Verge;
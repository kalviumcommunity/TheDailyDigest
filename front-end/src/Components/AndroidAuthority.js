// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./News.css";
// import CircularProgress from '@mui/material/CircularProgress';
// import Backdrop from '@mui/material/Backdrop';


// const Android = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   console.log(data)

//   useEffect(() => {

//     const preLoader =async()=>{
//       const response = await axios.get("http://localhost:3001/androidauthority")
//       setData(response.data.rss.channel[0].item);
//       setLoading(false);
//     };
//     preLoader();
//   }, []);


//   return (  
//     <div>
//             {loading ? (
//         <Backdrop open={loading}>
//           <CircularProgress color="inherit" />
//         </Backdrop>

//       ) : (
//       data.map((item, index) => {
//         return(      
//         <div className="news" key={index}>
//           <img className="img" src={item.content[0].$.url} alt="hi"></img>
//           <a className="anchor-tag" href={item.link[0]}>{item.title[0]}</a>
//           <p className="para">Uploaded on {item.pubDate}</p>
//           {/* <hr></hr> */}
//         </div>
//         );
//       })
//       )}
      
//     </div>
//   );
// };

// export default Android;


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';



const Android = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (  
    <div>
      {loading ? (
        <Backdrop  className="back-drop-visibility" open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>

      ) : (
        data.map((item, index) => {
          const date=item.pubDate[0].slice(0,22)
          return(      
            <div className="news" key={index}>
              <img className="img" src={item.content[0].$.url} alt="hi"></img>
              <h2 className="anchor-tag" onClick={() => handleOnClick(item.link[0])}>
                {item.title[0]}
              </h2>
              <p className="para">Uploaded on {date}</p>
              {/* <hr></hr> */}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Android;
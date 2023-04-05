
import { Route, Routes } from "react-router-dom"
import Ars from './Components/ArsTechnica';
import Tnw from './Components/Tnw';
import Eng from './Components/Engadget';
import Venture from './Components/VentureBeat';
import Giz from './Components/Gizmodo';
import Digi from './Components/DigitalTrends';
import Android from './Components/AndroidAuthority';
import Verge from './Components/TheVerge';
import Police from './Components/AndroidPolice';
import Muo from './Components/Muo';
import Sidebar from './Components/Sidebar';
import Navbar from "./Components/Navbar";
import React, { useState, useEffect } from "react";
import Preloader from "./Components/Preloader";
import './App.css'
import Home from "./Components/Home";



function App() {

  
  const [loading, setLoading] = useState(true);

  const [searchbar, setSearchbar] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);



  return (
    <>
      <div className={`${loading ? 'show' : 'hide'}`}>
        <Preloader />
      </div>
      <div className={`${loading ? 'hide' : 'show'}`}>
        <Sidebar />
        <Navbar setSearchbar={setSearchbar} />
        <Routes>
          <Route path="*" element={<Home/>} />
          <Route path={"/"} element={<Home />} />
          <Route path={"/arstechnica"} element={<Ars />} />
          <Route path={"/tnw"} element={<Tnw />} />
          <Route path={"/engadget"} element={<Eng/>}/>
          <Route path={"/androidpolice"} element={<Police/>}></Route>
          <Route path={"/venture"} element={<Venture/>}></Route>
          <Route path={"/gizmodo"} element={<Giz/>}></Route>
          <Route path={"/digitaltrends"} element={<Digi/>}></Route>


          <Route path={"/androidauthority"} element={<Android searchbar={searchbar}/>}></Route>


          <Route path={"/theverge"} element={<Verge/>}></Route>
          <Route path={"/muo"} element={<Muo/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;


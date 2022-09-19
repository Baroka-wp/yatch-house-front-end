import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import './homepage.css';
import { border } from '@mui/system';


const HomePage = () => (
  <div>
    <div
      className='wallpaper'
      style={{
        backgroundImage: "url(/images/maldives.jpg)",
        backgroundSize: "cover",
        height: "100vh",
        position: "relative",
        width: "100%",
      }}
    >
        <div className = "hamburger">
            <div className = "line"></div>
            <div className = "line"></div>
        </div>
        <div className='wallpaper-content'>
        <SearchIcon
          sx={{
            color: "#1663be",
            borderRadius: "48%",
            border: "1px solid white",
            backgroundColor: "white",
            fontSize: "1rem",
            width: "2.6rem",
            height: "4rem",
            position: "absolute",
            top:"20px",
            right: "2rem",
            transform:"rotate(90deg)",
          }}
        />
        <h1> Rent a Yatch House with Yatch flex</h1>
        </div>
        <div className="reserve-button">
            <button className='reserve'>Reserve Now
            <ExpandCircleDownIcon sx={{color:"#fff", transform:"rotate(-90deg)"}} />
            </button>
        </div>
    </div>
  </div>
);


export default HomePage;
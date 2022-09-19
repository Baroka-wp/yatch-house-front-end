import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import './homepage.css';

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
            color: "#00B5E2",
            borderRadius: "45%",
            border: "1px solid white",
            backgroundColor: "white",
            fontSize: "1rem",
            width: "4rem",
            height: "2.5rem",
            position: "absolute",
            top:"20px",
            right: "2rem",
          }}
        />
        <h1> Rent a Yatch House with Yatch flex</h1>
        </div>
    </div>
  </div>
);


export default HomePage;
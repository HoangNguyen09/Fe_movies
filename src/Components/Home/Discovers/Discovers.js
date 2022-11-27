//import { YoutubeSearchedFor } from "@mui/icons-material";
import React from "react";
import "./Discovers.css";
import {Link} from 'react-router-dom';


function Discovers({ banner, title, des, id, year, slug}) {
  console.log("test thành phần", banner)
  const truncate = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) + "..." : string;
  };
  
  
  return (
    <>
      <div className="discovers">
      
        <div className="discover__img" key={id}>
        
          <img src={`${banner}`} alt={title} />
        </div>
        
        <div className="discover__content">
          <div className="discover__left">
            <h3>
              {title} - <span>( {year} )</span>
            </h3>
            <div className="button__box">
              <Link to={`${slug}/${id}`}><button className="btn1">Xem phim</button></Link>
            </div>
            <p>{truncate(des, 65)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discovers;

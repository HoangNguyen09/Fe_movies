import React, { useState } from "react";
import "./MovieDashboard.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetByIdQuery } from "../../features/Api";
import { useGetComedyQuery } from "../../features/Api";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";
import PlayFilm from "../PlayFilm/PlayFilm";
import { Public } from "@mui/icons-material";
const base_url = "";

function MovieDashboard() {
  
  const [string, setString] = useState(150);
  const [show, setShow] = useState("Xem thêm");
  const navigate = useNavigate();
  const { id/* , type */ } = useParams();
  const info = {
    id: id,
    /* type: 'episode', */
  };
  console.log("test datamovie", info) 
  
  const { data } = useGetByIdQuery(info);
/*   const { datamovie } = useGetComedyQuery();*/
  console.log("test datamovie", data) 

  const truncate = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) + "..." : string;
  };

  const stringHandler = () => {
    setString(1500);
    setShow("");
  };

  const backHandler = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
    }
  };

  return (
    <>
      <div
        className="movieDashboard"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${data?.data?.thumb})`,
          backgroundPosition: "center center",
          id:id,
        }}
      >

     
              
              
     
      </div>
      <div className="layer"></div>
      <div className="back__icon" onClick={() => backHandler()}>
        <span>Trở về</span>
      </div>



      <div className="movie__content">
        <div className="name">
          <h3>{data?.data?.name || data?.data?.slug || data?.data?.aka}</h3>
          <p>
            {truncate(data?.data?.content, string)}{" "}
            <span onClick={() => stringHandler()}>{show}</span>
          </p>
        </div>
        <div className="button__box">
          <Link to={`/play/${id}`}><button>
            <PlayArrowIcon /> Chiếu phim
          </button></Link>
        </div>
      </div>
    </>
  );
}

export default MovieDashboard;

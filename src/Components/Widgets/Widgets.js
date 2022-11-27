import React from "react";
import "./Widgets.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "./SearchBar/SearchBar";
import Tag from "./Tags/Tag";
import PopularMovies from "./PopularMovies/PopularMovies";
import { useGetPopularQuery } from "../../features/Api";

function Widgets() {
  const { data } = useGetPopularQuery();
  const resss = data?.data[Math.floor(Math.random() * data.data.length - 1)];
  console.log(resss)

  return (
    <>
      <div className="widgets">
        <SearchBar Icon={SearchIcon} />
        <div className="tag__box">
          <Link to="/toptrending" style={{ textDecoration: 'none' }}><Tag tag="Top trending"/></Link>
          <Link to="/tvshow" style={{ textDecoration: 'none' }}><Tag tag="Tv Show" /></Link>
          <Link to="/topdanhgia" style={{ textDecoration: 'none' }}><Tag tag="Top đánh giá" /></Link>
          <Link to="/haihuoc" style={{ textDecoration: 'none' }}><Tag tag="Hài hước" /></Link>
          <Link to="/langman" style={{ textDecoration: 'none' }}><Tag tag="Lãng mạn" /></Link>
          <Link to="/kinhdi" style={{ textDecoration: 'none' }}><Tag tag="Kinh dị" /></Link>
          <Link to="/tailieu" style={{ textDecoration: 'none' }}><Tag tag="Tài liệu" /></Link>
        </div>

        <div className="popular__box">
          <div className="heading">Phim nhiều người xem</div>
          
              <PopularMovies
             
              Banner={resss?.background}
              title={resss?.name || resss?.name || resss?.name}
              description={resss?.content}
              
              rate={resss?.like}
              release_date={resss?.year || resss?.year}
              id={resss?.id}
              type="movie"
            
  
              />
            
        </div>
      </div>
    </>
  );
}

export default Widgets;

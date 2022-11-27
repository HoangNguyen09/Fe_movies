import React from 'react'
import './PopularMovies.css'
import {Link} from 'react-router-dom';
const base_url = "https://image.tmdb.org/t/p/original";


function PopularMovies({Banner , title , description , id , type}) {

    const truncate = (string , num) => {
        return string?.length > num ? string.substr(0 , num-1)+'...' : string
    }
  return (
    <>
   <Link to={`${type}/${id}`}>
   <div className="popularMovies" key={id}>
        <div className="banner__img">
            <img src={`${Banner}`} alt={title} />
        </div>
        <div className="popular__content">
            <span>{title}</span>
            <p>{truncate(description, 90)}</p>
        </div>
    </div></Link>
    </>
  )
}

export default PopularMovies
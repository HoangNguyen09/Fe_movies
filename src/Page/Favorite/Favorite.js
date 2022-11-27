import React from "react";
import "./Favorite.css";
import { useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { favRemove } from "../../features/favSlice";
const base_url = "https://image.tmdb.org/t/p/original";

function Favorite() {
  const [icon, setIcon] = React.useState(<FavoriteIcon />);
  const data = useSelector((state) => state.fav.fav);
  const dispatch = useDispatch();

  const truncate = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) + "..." : string;
  };

  return (
    <>
      <div className="favorite">
        <div className="fav__box">
          {data &&
            data.map((data) => (
              <div className="moviesRow" key={data?.id}>
                <Link to={`/${data?.type}/${data?.id}`}>
                  <img src={`${base_url}${data?.img}`} />
                </Link>
                <div
                  className="fav"
                  onClick={() => dispatch(favRemove(data?.id))}
                >
                  {icon}
                </div>

                <div className="movie__info">
                  <div className="movie__name">
                    <h3>{truncate(data?.title, 18)}</h3>
                  </div>
                  <div className="movie__other">
                    <p>
                      {data?.release_date}
                      <span>
                        {data?.rate}
                        <StarIcon />
                      </span>
                    </p>
                    <p>{data?.type}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Favorite;

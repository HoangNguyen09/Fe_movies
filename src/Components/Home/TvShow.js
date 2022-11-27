import "./Home.css";
import MoviesRow from "./MoviesRow/MoviesRow";

import {
  useGetTvShowQuery,
} from "../../features/Api";

function TvShow() {
  const tvShowData = useGetTvShowQuery();

  const resTv = tvShowData?.data?.results;
  return (
    <>
      <div className="home">
        <div className="heading">Tv Show</div>
        <div className="home__box">
          {resTv &&
            resTv.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_name || data.name}
                release_date={data.first_air_date}
                rate={data.vote_average}
                type="tv"
              />
            ))}
        </div>
        
        <div className="home__box">
          {resTv &&
            resTv.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_name || data.name}
                release_date={data.first_air_date}
                rate={data.vote_average}
                type="tv"
              />
            ))}
        </div>
        
        <div className="home__box">
          {resTv &&
            resTv.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_name || data.name}
                release_date={data.first_air_date}
                rate={data.vote_average}
                type="tv"
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default TvShow;

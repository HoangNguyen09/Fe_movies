import "./Home.css";
import MoviesRow from "./MoviesRow/MoviesRow";

import {
  useGetTrendingQuery,
} from "../../features/Api";

function Trend() {
  const trendingData = useGetTrendingQuery();


  const resT = trendingData?.data?.results;

  return (
    <>
      <div className="home">
        <div className="heading">Phim Top Trending</div>
        <div className="home__box">
          {resT &&
            resT.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_title || data.original_name || data.title}
                release_date={data.release_date || data.first_air_date}
                rate={data.vote_average}
                type="movie"
              />
            ))}
        </div>
        <div className="home__box">
          {resT &&
            resT.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_title || data.original_name || data.title}
                release_date={data.release_date || data.first_air_date}
                rate={data.vote_average}
                type="movie"
              />
            ))}
        </div>
        <div className="home__box">
          {resT &&
            resT.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_title || data.original_name || data.title}
                release_date={data.release_date || data.first_air_date}
                rate={data.vote_average}
                type="movie"
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Trend;

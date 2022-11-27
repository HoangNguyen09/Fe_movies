import "./Home.css";
import MoviesRow from "./MoviesRow/MoviesRow";

import {
  useGetHorrorQuery,
} from "../../features/Api";

function KinhDi() {
  const horrorData = useGetHorrorQuery();

  const resH = horrorData?.data?.results;

  return (
    <>
      <div className="home">
        <div className="heading">Phim Kinh Dị</div>
        <div className="home__box">
          {resH &&
            resH.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_title || data.title}
                release_date={data.release_date}
                rate={data.vote_average}
                type="movie"
              />
            ))}
        </div>
        
        <div className="home__box">
          {resH &&
            resH.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_title || data.title}
                release_date={data.release_date}
                rate={data.vote_average}
                type="movie"
              />
            ))}
        </div>
        
        <div className="home__box">
          {resH &&
            resH.map((data) => (
              <MoviesRow
                id={data?.id}
                img={data?.poster_path}
                title={data.original_title || data.title}
                release_date={data.release_date}
                rate={data.vote_average}
                type="movie"
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default KinhDi;

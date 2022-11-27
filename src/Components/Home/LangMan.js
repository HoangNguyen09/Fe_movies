import "./Home.css";
import MoviesRow from "./MoviesRow/MoviesRow";

import {

  useGetRomanceQuery,
} from "../../features/Api";

function LangMan() {
  const romanceData = useGetRomanceQuery();

  const resR = romanceData?.data?.results;

  return (
    <>
      <div className="home">
        <div className="heading">Phim Lãng Mạn</div>
        <div className="home__box">
          {resR &&
            resR.map((data) => (
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
          {resR &&
            resR.map((data) => (
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
          {resR &&
            resR.map((data) => (
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

export default LangMan;

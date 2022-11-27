import "./Home.css";
import MoviesRow from "./MoviesRow/MoviesRow";

import {
  useGetTopRatedQuery,
} from "../../features/Api";

function Rate() {
  const topRatedData = useGetTopRatedQuery();

  const resTr = topRatedData?.data?.results;

  return (
    <>
      <div className="home">
        <div className="heading">Top Đánh Giá</div>
        <div className="home__box">
          {resTr &&
            resTr.map((data) => (
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
          {resTr &&
            resTr.map((data) => (
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
          {resTr &&
            resTr.map((data) => (
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

export default Rate;

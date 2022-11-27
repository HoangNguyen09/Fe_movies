import "./Home.css";
import MoviesRow from "./MoviesRow/MoviesRow";

import {
  useGetDocumentariesQuery,
} from "../../features/Api";

function TaiLieu() {
  const docData = useGetDocumentariesQuery();

  const resD = docData?.data?.results;

  return (
    <>
      <div className="home">
        <div className="heading">Phim Tài Liệu</div>
        <div className="home__box">
          {resD &&
            resD.map((data) => (
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
          {resD &&
            resD.map((data) => (
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
          {resD &&
            resD.map((data) => (
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

export default TaiLieu;

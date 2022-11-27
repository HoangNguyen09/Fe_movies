import "./Home.css";

import MoviesRow from "./MoviesRow/MoviesRow";

import {
  useGetComedyQuery,

} from "../../features/Api";

function HaiHuoc() {
  const comedyData = useGetComedyQuery();

  const resC = comedyData.data;
  console.log("test hastag hai huoc: ",resC )

  return (
    <>
      <div className="home">
        <div className="heading">Hài Hước</div>
        <div className="home__box">
          {resC &&
            resC?.data?.map((data) => (
              <MoviesRow
              id={data?.id}
              img={data?.thumb}
              title={data?.name || data?.aka || data?.slug}
              release_date={data?.Year?.name}
              rate={data?.liked}
              type={data?.Type?.name}
              slug={data?.slug}
              />
            ))}
        </div>

        <div className="home__box">
          {resC &&
            resC?.data?.map((data) => (
              <MoviesRow
              id={data?.id}
              img={data?.thumb}
              title={data?.name || data?.aka || data?.slug}
              release_date={data?.Year?.name}
              rate={data?.liked}
              type={data?.Type?.name}
              slug={data?.slug}
              />
            ))}
        </div>
        
        <div className="home__box">
          {resC &&
            resC?.data?.map((data) => (
              <MoviesRow
              id={data?.id}
              img={data?.thumb}
              title={data?.name || data?.aka || data?.slug}
              release_date={data?.Year?.name}
              rate={data?.liked}
              type={data?.Type?.name}
              slug={data?.slug}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default HaiHuoc;

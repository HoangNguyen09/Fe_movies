//import React, { useEffect } from "react";
import Discovers from "./Discovers/Discovers";
import "./Home.css";
import StarIcon from "@mui/icons-material/Star";
import MoviesRow from "./MoviesRow/MoviesRow";

import {
  useGetDiscoverQuery,
  useGetComedyQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetTvShowQuery,
  useGetDocumentariesQuery,
  useGetHorrorQuery,
  useGetRomanceQuery,
} from "../../features/Api";

function Home() {
  const { data } = useGetDiscoverQuery();
  const comedyData = useGetComedyQuery();
  const topRatedData = useGetTopRatedQuery();
  const trendingData = useGetTrendingQuery();
  const tvShowData = useGetTvShowQuery();
  const romanceData = useGetRomanceQuery();
  const horrorData = useGetHorrorQuery();
  const docData = useGetDocumentariesQuery();

  const res = data;
  /* data1?.results[Math.floor(Math.random() * data1.results.length - 1)];*/
  const ress = res?.data[Math.floor(Math.random() * res.data.length - 1)];
  console.log(ress)

  const resC = comedyData?.data;
  console.log(">>>test resC : ",resC)
  

  const resT = trendingData?.data;

  const resTr = topRatedData?.data;

  const resTv = tvShowData?.data;

  const resR = romanceData?.data;

  const resH = horrorData?.data;

  const resD = docData?.data;


  return (
    <>
      <div className="home">
        <div className="heading top__heading">
          <h3>Đề Xuất</h3>{" "}
        </div>
        <div className="home__boxx">
        
            <Discovers
              id={ress?.id}
              banner={ress?.background}
              title={ress?.name || ress?.aka || ress?.slug}
              des={ress?.content}
              year={ress?.Year?.name}
              slug={ress?.slug}
            />

        </div>

        <div className="heading">Phim Top Trending</div>
        <div className="home__box">
          {resT &&
            resT.data.map((data) => (
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

        <div className="heading">Tv Show</div>
        <div className="home__box">
          {resTv &&
            resTv.data.map((data) => (
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

        <div className="heading">Top Đánh Giá</div>
        <div className="home__box">
          {resTr &&
            resTr.data.map((data) => (
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

        <div className="heading">Hài Hước</div>
        <div className="home__box">
          {resC &&
            resC.data.map((data) => (
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

        <div className="heading">Phim Lãng Mạn</div>
        <div className="home__box">
          {resR &&
            resR.data.map((data) => (
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

        <div className="heading">Phim Kinh Dị</div>
        <div className="home__box">
          {resH &&
            resH.data.map((data) => (
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

        <div className="heading">Phim Tài Liệu</div>
        <div className="home__box">
          {resD &&
            resD.data.map((data) => (
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

export default Home;

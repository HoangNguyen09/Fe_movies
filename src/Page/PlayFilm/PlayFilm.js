import "./PlayFilm.css";
import MoviesRow from "../../Components/Home/MoviesRow/MoviesRow";
import { useParams } from "react-router-dom";
import Tag from "../../Components/Widgets/Tags/Tag";

import {

  useGetTrendingQuery, useGetlinkmovieQuery,
} from "../../features/Api";
import MovieDashboard from "../MovieDashboard/MovieDashboard";


function PlayFilm() {
  const { id/* , type */  } = useParams();
  
  const info1 = {
    id: id,
    /* type: 'episode', */
  };
  
  console.log('test play id info1:',info1)
  const { data } = useGetlinkmovieQuery(info1);
  const resL = data?.data?.Episodes;
  console.log("test resL: ",resL)

  const trendingData = useGetTrendingQuery();
  const resT = trendingData?.data;
  console.log("test resT: ",resT)

  return (
    <>
      <div className="home">
        <div className="play" >
        {resL &&
          resL.map((data) => (
            <iframe width="100%" height="100%" src={`${data.hls}`} title="{data.episode}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
          ))}
        
        </div>
        <div className="tap">
        <div className="tag__box">
          <Tag tag="Trailer"  active/>
          <Tag tag="Tập 1" />
          
        </div>
        </div>
        <div className="cmt">
          Hãy để lai bình luận tại đây
        </div>
        <div className="heading">Phim Tương Tự</div>
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
      </div>
    </>
  );
}

export default PlayFilm;

import React from "react";
import "./Search.css";
import { useGetSearchQuery } from "../../features/Api";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector , useDispatch } from "react-redux";
import MoviesRow from "../Home/MoviesRow/MoviesRow";
//import SearchBar from "../Widgets/SearchBar/SearchBar";
import {search} from '../../features/searchSlice';

function Search() {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.search);
  console.log(query);
  const { data } = useGetSearchQuery(query);
  console.log("test data search: ",data.id);
  const res = data?.results;
  console.log(res);

  const queryHandler = (e) => {
    e.preventDefault()
    dispatch(search(value));
  };

  const popcorn = 'https://as2.ftcdn.net/v2/jpg/02/07/53/73/1000_F_207537392_hQeHBy8BI4oFPzDmhjF94IHb1Tu8jZyG.jpg';

  return (
    <>
      <div className="searchh">
       <div className="search__top">
          <div className="heading">{query} Results</div>
       <form className="search" onSubmit={(e) => queryHandler(e)}>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search..."
            maxLength="20"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
       </div>
        <div className="home__box">
          {res &&
            res?.map((data) => (
              /* console.log("test search: ",data) */
              <MoviesRow
                grid
                id={data?.id}
                img={data?.background || data?.thumb}
                popcorn={popcorn}
                title={data?.slug || data?.name || data?.aka}
                release_date={data?.release_date || data?.first_air_date}
                rate={data?.vote_average}
                type="movie"
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Search;

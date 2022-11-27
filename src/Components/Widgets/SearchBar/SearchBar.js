import React, { useState } from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import {search} from '../../../features/searchSlice';
import {useNavigate} from 'react-router-dom';


function SearchBar({ Icon }) {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("Spider Man");

const navigate = useNavigate();

  const queryHandler = (e) => {
    e.preventDefault();
    dispatch(search(query));
    navigate('search')
  };

  return (
    <>
      <form className="search" onSubmit={(e) => queryHandler(e)}>
        <div className="search">
          <Icon className="icon" />
          <input
            type="text"
            placeholder="Tìm kiếm ..."
            maxLength="20"
            //value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
         
        </div>
      </form>
    </>
  );
}

export default SearchBar;

import React from "react";
import { setFilter } from "../../redux/filter/filtersSlice";
import css from "./SearchBox.module.css";
const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={css.div}>
      <span className={css.span}>Find contacts by Name</span>
      <input
        type="text"
        name="name"
        value={filter}
        onChange={(event) => {
          const action = setFilter(event.target.value);
          dispatch(action);
        }}
      />
    </div>
  );
};

export default SearchBox;

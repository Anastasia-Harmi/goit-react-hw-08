import React from "react";
import css from "./SearchBox.module.css";
const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={css.div}>
      <span className={css.span}>Find contacts by Name</span>
      <input
        type="text"
        name="name"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;

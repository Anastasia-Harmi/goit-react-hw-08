import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filter/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.name);

  return (
    <div className={css.div}>
      <span className={css.span}>Find contacts by Name</span>
      <input
        type="text"
        name="name"
        value={searchValue}
        onChange={(event) => {
          const action = setFilter(event.target.value);
          dispatch(action);
        }}
      />
    </div>
  );
};

export default SearchBox;

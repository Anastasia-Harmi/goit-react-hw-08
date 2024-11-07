import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filter/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.name);
  const handleChange = (evt) => {
    const action = setFilter(evt.target.value);
    dispatch(action);
  };
  return (
    <div className={css.div}>
      <span className={css.span}>Find contacts by Name</span>
      <input
        type="text"
        name="name"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;

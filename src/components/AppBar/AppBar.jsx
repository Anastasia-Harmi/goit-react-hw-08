import React from "react";
import Navigation from "../Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserData } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import routes from "../../routing/routes";
import css from "./AppBar.module.css";

import { clearContacts } from "../../redux/contacts/operations";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(clearContacts());
  };

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? (
        <div>
          <span>Welcome, {userData.email} </span>
          <button type="button" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      ) : (
        <div className={css.control}>
          <NavLink to={routes.register}>Register</NavLink>
          <NavLink to={routes.login}>Login</NavLink>
        </div>
      )}
    </header>
  );
};

export default AppBar;

import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import routes from "../../routing/routes";
import { selectIsLoggedIn, selectUserData } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
  return (
    <header className={css.header}>
      <div classame={css.container}>
        <nav className={css.nav}>
          <NavLink to={routes.home}>Home</NavLink>
          {isLoggedIn ? (
            <div>
              <span>Welcome, {userData.email} </span>
              <button type="button">Logout</button>
            </div>
          ) : (
            <>
              <NavLink to={routes.register}>Register</NavLink>
              <NavLink to={routes.login}>Login</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

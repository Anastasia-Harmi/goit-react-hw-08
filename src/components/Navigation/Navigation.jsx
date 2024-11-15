import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import routes from "../../routing/routes";

const Navigation = () => {
  return (
    <header className={css.header}>
      <div classame={css.container}>
        <nav className={css.nav}>
          <NavLink to={routes.home}>Home</NavLink>
          <NavLink to={routes.register}>Register</NavLink>
          <NavLink to={routes.login}>Login</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import routes from "../../routing/routes";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to={routes.home}>Home</NavLink>
    </nav>
  );
};

export default Navigation;

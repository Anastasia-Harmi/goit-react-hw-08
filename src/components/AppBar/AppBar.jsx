import React from "react";
import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Navigation />
      {isLoggedIn ? <p>usermenu</p> : <p>authnav</p>}
    </>
  );
};

export default AppBar;

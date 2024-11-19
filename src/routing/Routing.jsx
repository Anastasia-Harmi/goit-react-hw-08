import { lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));

const Routing = () => {
  return (
    <Routes>
      <Route
        path={routes.register}
        element={<RestrictedRoute component={<RegistrationPage />} />}
      />
      <Route
        path={routes.login}
        element={<RestrictedRoute component={<LoginPage />} />}
      />

      <Route
        path={routes.contacts}
        element={
          <PrivateRoute component={<ContactPage />} redirectTo={routes.login} />
        }
      />

      <Route path={routes.home} element={<HomePage />} />
    </Routes>
  );
};

export default Routing;

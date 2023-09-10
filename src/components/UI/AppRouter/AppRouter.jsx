import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { privateRoutes, publicRoutes } from "../../../router";
import { AuthContext } from "../../../context";
import Loader from "../Loader/Loader";

const AppRouter = () => {
  const { isAuth, setIsAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Router>
        <NavBar />
        {isAuth ? (
          <Switch>
            {privateRoutes.map((route) => (
              <Route
                component={route.component}
                path={route.path}
                key={route.path}
                exact={route.exact}
              />
            ))}
            <Redirect to="/posts" />
          </Switch>
        ) : (
          <Switch>
            {publicRoutes.map((route) => (
              <Route
                component={route.component}
                path={route.path}
                key={route.path}
                exact={route.exact}
              />
            ))}
            <Redirect to="/login" />
          </Switch>
        )}
      </Router>
    </>
  );
};

export default AppRouter;

import { Route, Redirect, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

export default function PrivateRoute({ component: Component, ...rest }) {
  const auth = UseAuth();
  const location = useLocation();

  return (
    <Route {...rest}>
      {auth.isLogged ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login" , state: { from: location }}} />
      )}
    </Route>
  );
}
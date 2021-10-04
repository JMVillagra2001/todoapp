import { Route, Redirect } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

export default function PublicRoute({ component: Component, ...rest }) {
  const auth = UseAuth();

  return (
    <Route {...rest}>
      {!auth.isLogged ? (
        <Component />
      ) : (
        <Redirect to="/todos" />
      )}
    </Route>
  );
}
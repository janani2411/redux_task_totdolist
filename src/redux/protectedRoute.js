import { Route, Redirect } from "react-router-dom";
function ProtectedRoute({ children, ...rest }) {
  let token = JSON.parse(localStorage.getItem("auth"));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default ProtectedRoute;

import React, { Navigate, useLocation } from "react-router-dom";
import UseAuthStatus from "../hooks/UseAuthStatus";
const inPrivatePaths = ["/MyList", "/Index"];

const { loggedIn } = UseAuthStatus();
function PrivateRoute({ children }) {
  const location = useLocation();
  const current = location.pathname;

  const isPrivate = inPrivatePaths.includes(current);
  console.log(isPrivate);

  if (isPrivate && current !== "/SignIn" && !loggedIn) {
    return <Navigate to="/SignIn" state={{ from: location }} />;
  }

  return children;
}

export default PrivateRoute;

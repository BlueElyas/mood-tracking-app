import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const user = localStorage.getItem("user");
  const lasLoggedIn = localStorage.getItem("lastLoggedIn");

  if (lasLoggedIn) {
    return <Navigate to="/login" replace />;
  } else if (!lasLoggedIn && !user) {
    return <Navigate to="/create-account" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;

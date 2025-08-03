import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function ProtectedRoutes() {
  const [isChecking, setIsChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);

  useEffect(() => {
    const userString = localStorage.getItem("user");
    const loggedIn = localStorage.getItem("isLoggedIn");

    setHasAccount(!!userString);
    setIsLoggedIn(loggedIn === "true");
    setIsChecking(false);
  }, []);

  if (isChecking) return null;

  if (hasAccount) return <Navigate to="/create-account" />;
  if (isLoggedIn) return <Navigate to="/login" />;

  return <Outlet />;
}

export default ProtectedRoutes;

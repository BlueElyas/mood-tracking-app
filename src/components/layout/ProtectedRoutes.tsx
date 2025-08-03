import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function ProtectedRoutes() {
  const [isChecking, setIsChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);

  useEffect(() => {
    const userString = localStorage.getItem("user");
    const loggedIn = localStorage.getItem("lastLoggedIn");
    if (!userString) return;

    const userStringObj = JSON.parse(userString);

    setHasAccount(Object.keys(userStringObj).length > 0);
    setIsLoggedIn(loggedIn !== null);
    setIsChecking(false);
  }, []);

  if (isChecking) return null;

  if (isLoggedIn || hasAccount) return <Navigate to="/login" />;
  if (!hasAccount) return <Navigate to="/create-account" />;

  return <Outlet />;
}

export default ProtectedRoutes;

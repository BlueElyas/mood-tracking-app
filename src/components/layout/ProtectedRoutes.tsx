import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function ProtectedRoutes() {
  const [hasAccount, setHasAccount] = useState(false);

  useEffect(() => {
    const userString = localStorage.getItem("user");
    const localStorageAccountValue = userString ? JSON.parse(userString) : null;
    setHasAccount(localStorageAccountValue);
  }, []);

  console.log(hasAccount);

  if (!hasAccount) {
    return <Navigate to="/sign-in" />;
  } else {
    return <Outlet />;
  }
}

export default ProtectedRoutes;

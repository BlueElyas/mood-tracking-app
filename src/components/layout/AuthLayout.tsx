import { Outlet } from "react-router-dom";
import Icon from "../icon/Icon";

function AuthLayout() {
  return (
    <>
      <div className="bg-lightGradient h-screen flex flex-col gap-12 items-center justify-center">
        <Icon name="logo" />
        <Outlet />
      </div>
    </>
  );
}

export default AuthLayout;

// Add localStorage, signup, and login logic here if needed

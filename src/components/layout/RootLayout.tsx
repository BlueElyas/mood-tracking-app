import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function RootLayout() {
  return (
    <>
      <div className="bg-lightGradient h-vh p-16">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;

import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function RootLayout() {
  return (
    <>
      <div className="bg-lightGradient">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;

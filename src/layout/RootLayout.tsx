import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
}

export default RootLayout;

import { Outlet } from "react-router-dom";
import Container from "../container/Container";

function AuthLayout() {
  return (
    <>
      <div className="bg-lightGradient h-screen ">
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
}

export default AuthLayout;

// Add localStorage, signup, and login logic here if needed

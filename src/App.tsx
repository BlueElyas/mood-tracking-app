import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import RootLayout from "./components/layout/RootLayout";
import ProtectedRoutes from "./components/layout/ProtectedRoutes";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="create-account" element={<SignUp />} />
    </Routes>
  );
}

export default App;

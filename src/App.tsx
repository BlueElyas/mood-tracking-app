import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import RootLayout from "./components/layout/RootLayout";
import AuthLayout from "./components/layout/AuthLayout";
import Login from "./pages/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<div>Signup Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;

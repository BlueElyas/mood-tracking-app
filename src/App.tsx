import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import RootLayout from "./components/layout/RootLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="" />
      </Route>
    </Routes>
  );
}

export default App;

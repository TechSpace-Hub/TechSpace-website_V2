import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../layouts/Mainlayout";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Room from "../pages/Room";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/room" element={<Room />} />
    </Routes>
  );
}

export default AppRoute;

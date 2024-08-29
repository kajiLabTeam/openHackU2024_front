import { Route, Routes } from "react-router-dom";
import SpotifyLoginPage from "../pages/SpotifyLogin";
import RoomCreatePage from "../pages/RoomCreate";
import RoomJoinPage from "../pages/RoomJoin";
import SongListPage from "../pages/SongList";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<SpotifyLoginPage />} />
      <Route path="/room/create" element={<RoomCreatePage />} />
      <Route path="/room/join" element={<RoomJoinPage />} />
      <Route path="/song/list" element={<SongListPage />} />
    </Routes>
  );
}

export default AppRoute;

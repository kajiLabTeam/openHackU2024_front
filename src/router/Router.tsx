import { Route, Routes } from "react-router-dom";
import SpotifyLoginPage from "@/pages/SpotifyLogin";
import SongListPage from "@/pages/SongList";
import RoomPage from "@/pages/Room";
import DemoRoomPage from "@/pages/DemoRoom";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<SpotifyLoginPage />} />
      <Route path="/room" element={<RoomPage />} />
      <Route path="/rooom" element={<DemoRoomPage />} />
      <Route path="/song/list" element={<SongListPage />} />
    </Routes>
  );
}

export default AppRoute;

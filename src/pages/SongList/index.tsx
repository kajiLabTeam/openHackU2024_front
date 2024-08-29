import SongList from "../../components/SongList";
import { ROOM_GET_RESPONSE } from "../../const";

function SongListPage() {
  return (
    <div>
      <SongList songData={ROOM_GET_RESPONSE.song_data} />
    </div>
  );
}

export default SongListPage;

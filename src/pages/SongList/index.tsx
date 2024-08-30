import AvatarList from "../../components/AvatarList";
import RoomText from "../../components/RoomText";
import SongList from "../../components/SongList";
import { DISPLAY_USER, ROOM_GET_RESPONSE } from "../../const";

import styles from "./styles.module.scss";
function SongListPage() {
  return (
    <div className={styles.container}>
      <div>
        <AvatarList displayUsers={DISPLAY_USER} />
      </div>
      <div>
        <RoomText password="とめぃとぅ" />
      </div>
      <div className={styles.songListContainer}>
        <SongList songData={ROOM_GET_RESPONSE.song_data} />
      </div>
    </div>
  );
}

export default SongListPage;

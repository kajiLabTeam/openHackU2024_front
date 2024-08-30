import styles from "./styles.module.scss";

import AvatarList from "@/components/AvatarList";
import RoomText from "@/components/RoomText";
import SongList from "@/components/SongList";
import { DISPLAY_USERS, ROOM_GET_RESPONSE } from "@/const";
import { NUMBER_OF_AVATARS } from "@/const/avatar";
import { DisplayUser } from "@/types/user";
import { generateDisplayUsers } from "./functions/displayUsers";
import { AVATAR_DEFAULT, AVATARS } from "@/assets/avatar";

function SongListPage() {
  const displayUsers: DisplayUser[] = generateDisplayUsers(
    DISPLAY_USERS,
    AVATARS,
    AVATAR_DEFAULT,
    NUMBER_OF_AVATARS
  );

  return (
    <div className={styles.container}>
      <div>
        <AvatarList displayUsers={displayUsers} />
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

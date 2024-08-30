import styles from "./styles.module.scss";

import AvatarList from "@/components/AvatarList";
import RoomText from "@/components/RoomText";
import SongList from "@/components/SongList";
import { NUMBER_OF_AVATARS } from "@/const/avatar";
import { DisplayUser } from "@/types/user";
import { generateDisplayUsers } from "./functions/displayUsers";
import { AVATAR_DEFAULT, AVATARS } from "@/assets/avatar";
import { useEffect, useState } from "react";
import { useSong } from "@/hooks/song";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/user";
import { passState } from "@/store/pass";
import { RoomGetPostRequest, SongData } from "@/types/song";

function SongListPage() {
  const { postRoomGet } = useSong();
  const user = useRecoilValue(userState);
  const pass = useRecoilValue(passState);

  const [displayUsers, setDisplayUsers] = useState<DisplayUser[]>([]);
  const [songData, setSongData] = useState<SongData[]>([]);

  useEffect(() => {
    async function post() {
      const request: RoomGetPostRequest = {
        pass: pass,
        display_name: user!.name,
        user_id: user!.id,
      };

      const data = await postRoomGet(request);
      if ("error" in data) {
        console.error(data.error);
        return;
      }
      console.log(data);

      const displayUsers = generateDisplayUsers(
        data.display_names,
        AVATARS,
        AVATAR_DEFAULT,
        NUMBER_OF_AVATARS
      );
      setDisplayUsers(displayUsers);
      setSongData(data.song_data);
    }

    post();
  }, []);

  return (
    <div className={styles.container}>
      <section>
        <AvatarList displayUsers={displayUsers} />
      </section>
      <section>
        <RoomText password="とめぇぃとぅ" />
      </section>
      <section className={styles.songListContainer}>
        <SongList songData={songData} />
      </section>
    </div>
  );
}

export default SongListPage;

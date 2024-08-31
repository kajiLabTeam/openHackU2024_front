import { useEffect, useState } from "react";
import { useSong } from "@/hooks/song";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/user";
import { passState } from "@/store/pass";
import { RoomGetPostRequest, SongData } from "@/types/song";
import { DisplayUser } from "@/types/user";
import { generateDisplayUsers } from "./functions/displayUsers";
import { AVATAR_DEFAULT, AVATARS } from "@/assets/avatar";
import { NUMBER_OF_AVATARS } from "@/const/avatar";

import styles from "./styles.module.scss";
import AvatarList from "@/components/AvatarList";
import RoomText from "@/components/RoomText";
import SongList from "@/components/SongList";

function SongListPage() {
  const { postRoomGet } = useSong();
  const recoilUser = useRecoilValue(userState);
  const recoilPass = useRecoilValue(passState);

  // ローカルストレージから user と pass を取得して初期化
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : recoilUser;
  });

  const [pass, setPass] = useState(() => {
    const savedPass = localStorage.getItem("pass");
    return savedPass ? JSON.parse(savedPass) : recoilPass;
  });

  const [displayUsers, setDisplayUsers] = useState<DisplayUser[]>(() => {
    const savedDisplayUsers = localStorage.getItem("displayUsers");
    return savedDisplayUsers ? JSON.parse(savedDisplayUsers) : [];
  });

  const [songData, setSongData] = useState<SongData[]>(() => {
    const savedSongData = localStorage.getItem("songData");
    return savedSongData ? JSON.parse(savedSongData) : [];
  });

  useEffect(() => {
    // ローカルストレージに user と pass を保存
    if (recoilUser) {
      localStorage.setItem("user", JSON.stringify(recoilUser));
      setUser(recoilUser);
    }

    if (recoilPass) {
      localStorage.setItem("pass", JSON.stringify(recoilPass));
      setPass(recoilPass);
    }
  }, [recoilUser, recoilPass]);

  useEffect(() => {
    async function post() {
      if (!user || !pass) return;

      const request: RoomGetPostRequest = {
        pass: pass,
        display_name: user.name,
        user_id: user.id,
      };

      const data = await postRoomGet(request);
      if ("error" in data) {
        console.error(data.error);
        return;
      }

      const displayUsers = generateDisplayUsers(
        data.display_names,
        AVATARS,
        AVATAR_DEFAULT,
        NUMBER_OF_AVATARS
      );
      setDisplayUsers(displayUsers);
      setSongData(data.song_data);

      // 状態をローカルストレージに保存
      localStorage.setItem("displayUsers", JSON.stringify(displayUsers));
      localStorage.setItem("songData", JSON.stringify(data.song_data));
    }

    post();

    const intervalId = setInterval(post, 3000);
    return () => clearInterval(intervalId);
  }, [user, pass]);

  return (
    <div className={styles.container}>
      <section>
        <AvatarList displayUsers={displayUsers} />
      </section>
      <section>
        <RoomText password={pass} />
      </section>
      <section className={styles.songListContainer}>
        <SongList songData={songData} />
      </section>
    </div>
  );
}

export default SongListPage;

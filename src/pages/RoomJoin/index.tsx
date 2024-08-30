import { useEffect, useState } from "react";

import { useSong } from "../../hooks/song";
import { SpotifyData } from "../../types/Spotify";

import { useRecoilState, useSetRecoilState } from "recoil";

import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import {
  RoomAccessPostRequest,
  AccountAlinePostRequest,
} from "../../types/song";
import {
  RoomAccessPostRequest,
  AccountAlinePostRequest,
} from "../../types/song";

import { getTokenFromUrl, formatSpotifyData } from "../../hooks/Spotify";
import { getTokenFromUrl, formatSpotifyData } from "../../hooks/Spotify";

import { tokenState } from "../../store/token";
import { passState } from "../../store/pass";
import { userState } from "../../store/user";

import styles from "./styles.module.scss";
import logo from "../../assets/logo.png";
import { RoomButton } from "../../components/RoomsButton";
import { RoomInput } from "../../components/RoomsInput/input";

function RoomPage() {
  const navigate = useNavigate();
  const { postRoomAccess, postRoomJoin, postAccount } = useSong();
  const [passInput, setPassInput] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [token, setToken] = useRecoilState(tokenState);
  const setUser = useSetRecoilState(userState);
  const setPassword = useSetRecoilState(passState);

  useSetRecoilState(passState);

  const handleJoin = async () => {
    const pass = (document.getElementById("pass") as HTMLInputElement).value;
    const display_name = (
      document.getElementById("display_name") as HTMLInputElement
    ).value;
    if (pass && display_name) {
      try {
        console.log("token", token);

        // Spotifyからデータを取得
        const spotifyData: SpotifyData = await formatSpotifyData(token);

        // ユニークIDを生成
        const userId: string = uuidv4();

        const request: AccountAlinePostRequest = {
          display_name: display_name,
          user_id: userId,
          spotify_data: spotifyData,
        };

        // const response = await postAccount(request);
        // console.log(response);

        const request2: RoomAccessPostRequest = {
          pass: pass,
          display_name: display_name,
          user_id: userId,
        };

        // const response2 = await postRoomAccess(request2);
        // console.log(response2);
        // const response3 = await postRoomJoin(request2);
        // console.log(response3);

        // アカウント情報を登録
        setPassword(pass);
        setUser({
          id: userId,
          name: display_name,
        });

        navigate("/song/list");
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const hash = getTokenFromUrl(); // getTokenFromUrlが正しい構造を返すことを確認

    // URLのハッシュをクリア
    window.location.hash = "";

    const token = hash?.access_token; // オプショナルチェーンで安全にトークンを取得

    if (token) {
      setToken(token);
    }

    console.log("I HAVE A TOKEN", token);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.divContainer}>
        <h1 className={styles.h1Container}>部屋</h1>

        <div className={styles.inputContainer}>
          <RoomInput
            value={passInput}
            placeholder="合言葉を入力"
            onChange={(e) => setPassInput(e.target.value)}
          />
          <RoomInput
            value={displayName}
            placeholder="表示名を入力"
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <RoomButton onClick={handleJoin} id="make">
          作成
        </RoomButton>
        <RoomButton onClick={handleJoin} id="join">
          参加
        </RoomButton>
      </div>
    </div>
  );
}

export default RoomPage;

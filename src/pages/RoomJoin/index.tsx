import { useEffect } from "react";

import { useSong } from "../../hooks/song";
import { SpotifyData } from "../../types/Spotify";

import { useRecoilState, useSetRecoilState } from "recoil";

import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import { RoomAccessPostRequest,AccountAlinePostRequest } from "../../types/song";

import { getTokenFromUrl,formatSpotifyData } from "../../hooks/Spotify";

import { tokenState } from "../../store/token";
import { passState } from "../../store/pass";
import { userState } from "../../store/user";

function RoomJoinPage() {
  const navigate = useNavigate();
  const { postRoomAccess, postRoomJoin,postAccount } = useSong();

  const [token, setToken] = useRecoilState(tokenState);
  const setUser = useSetRecoilState(userState);
  const setPassword = useSetRecoilState(passState);

  useSetRecoilState(passState);

  const handleJoin = async () => {
    const pass = (document.getElementById("pass") as HTMLInputElement).value;
    const display_name = (document.getElementById("display_name") as HTMLInputElement).value;
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
    <div className="Home">
      <h2>合言葉</h2>
      <input type="text" id="pass" />
      <h2>表示名</h2>
      <input type="text" id="display_name" />
      <button onClick={handleJoin}>グループに参加</button>
    </div>
  );
}

export default RoomJoinPage;

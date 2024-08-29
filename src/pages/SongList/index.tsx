import { useEffect } from "react";

import { useSong } from "../../hooks/song";
import { useRecoilState, useSetRecoilState } from "recoil";

import { useNavigate } from "react-router-dom";

import { RoomAccessPostRequest } from "../../types/song";

import { getTokenFromUrl } from "../../hooks/Spotify";
import { tokenState } from "../../store/token";

import { userState } from "../../store/user";

function RoomJoinPage() {
  const navigate = useNavigate();
  const { postRoomAccess, postRoomJoin } = useSong();

  const setToken = useSetRecoilState(tokenState);
  const [user, setUser] = useRecoilState(userState);

  const handleJoin = async () => {
    const pass = (document.getElementById("pass") as HTMLInputElement).value;
    if (pass) {
      try {
        const request: RoomAccessPostRequest = {
          pass: pass,
          display_name: user?.name || "",
          user_id: user?.id || "",
        };

        const response = await postRoomAccess(request);
        console.log(response);
        const response2 = await postRoomJoin(request);
        console.log(response2);

        setUser({
          id: user?.id || "",
          name: user?.name || "",
        });

        navigate("/room");
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
      <button onClick={handleJoin}>グループに参加</button>
    </div>
  );
}

export default RoomJoinPage;

import { useState, useEffect } from "react";
import {
  getTokenFromUrl,
  accessUrl,
  formatSpotifyData,
} from "../hooks/Spotify";
import { SpotifyData } from "../types/Spotify";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { AccountAlinePostRequest } from "../types/song";
import { useSong } from "../hooks/song";

// トークンの型を定義
type Token = string | null;

export function Login() {
  const navigate = useNavigate();

  const { postAccount } = useSong();

  // useStateに型注釈を追加
  const [token, setToken] = useState<Token>(null);
  //   const history = useHistory();  // ページ遷移用

  useEffect(() => {
    const hash = getTokenFromUrl(); // getTokenFromUrlが正しい構造を返すことを確認
    console.log(hash);

    // URLのハッシュをクリア
    window.location.hash = "";

    const accessToken = hash?.access_token; // オプショナルチェーンで安全にトークンを取得

    if (accessToken) {
      setToken(accessToken);
    }

    console.log("I HAVE A TOKEN", accessToken);
  }, []);

  const handleLogin = () => {
    window.location.href = accessUrl; // Spotifyログインページにリダイレクト
  };

  const handleSubmit = async () => {
    if (token) {
      try {
        // Spotifyからデータを取得
        const spotifyData: SpotifyData = await formatSpotifyData(token);

        // ユニークIDを生成
        const userId: string = uuidv4();

        console.log(userId);

        // display_nameを取得
        const displayName: string = (
          document.getElementById("display_name") as HTMLInputElement
        ).value;

        const request: AccountAlinePostRequest = {
          spotify_data: spotifyData,
          display_name: displayName,
          user_id: userId,
        };

        console.log(request);
        const response2 = await postAccount(request);
        console.log(response2);

        // 送信後、ページ遷移
        navigate("/home"); // 次のページに遷移
      } catch (error) {
        console.error("Error in handleSubmit:", error);
      }
    }
  };

  return (
    <div className="App">
      {token ? <p>表示名</p> : null}
      {token ? <input type="text" id="display_name" /> : null}
      {token ? (
        <button onClick={handleSubmit}>登録</button>
      ) : (
        <button onClick={handleLogin}>Spotifyにログイン</button>
      )}
    </div>
  );
}

export default Login;

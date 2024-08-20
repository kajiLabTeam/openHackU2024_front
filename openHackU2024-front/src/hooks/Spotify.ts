import { getUserPlaylistRequest} from '../types/Spotify';

//Spotifyの認証とAPIエンドポイントの定義
export const authEndpoint: string = "https://accounts.spotify.com/authorize";
export const PLAYLISTS_ENDPOINT: string = "https://api.spotify.com/v1/me/playlists";

const redirectUri: string = "http://localhost:5173/";

const clientId: string = "388bed2ea2634e63bf5bc7340ff51191";

// 対応するスコープを定義
const scopes: string[] = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// URLからアクセストークンを取得する関数
export const getTokenFromUrl = (): { [key: string]: string } => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce<{ [key: string]: string }>((initial, item) => {
      const parts: string[] = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

// SpotifyのログインページのURLを生成
export const accessUrl: string = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// プレイリスト取得関数に型定義を追加
export const getUserPlaylists = async (access_token: string): Promise<getUserPlaylistRequest> => {
    try {
        const response = await fetch(PLAYLISTS_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        if (response.ok) {
            const data: getUserPlaylistRequest = await response.json();
            return data; // プレイリストのリストを返す
        } else {
            throw new Error(`Failed to fetch playlists: ${response.status}`);
        }
    } catch (error) {
        console.error(error);
        return { spotify_date: [], display_name: "", user_id: "" };
    }
};

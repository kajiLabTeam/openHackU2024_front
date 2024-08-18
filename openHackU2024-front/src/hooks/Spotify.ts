export const authEndpoint: string = "https://accounts.spotify.com/authorize";

const redirectUri: string = "http://localhost:5173/";

const clientId: string = "388bed2ea2634e63bf5bc7340ff51191";

// 対応する範囲を決める
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
}

// SpotifyのログインページのURL
export const accessUrl: string = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

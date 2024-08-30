import { SongData, SpotifyData } from "@/types/song";
import {
  REDIRECT_URL,
  SPOTIFY_AUTH_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_PLAYLIST_API_URL,
} from "@/utils/env";

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
    .split("&")
    .reduce<{ [key: string]: string }>((initial, item) => {
      const parts: string[] = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

// SpotifyのログインページのURLを生成
export const accessUrl: string = `${SPOTIFY_AUTH_URL}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// プレイリストデータを指定のJSON形式に整形する関数
export const formatSpotifyData = async (
  access_token: string
): Promise<SpotifyData> => {
  // 環境変数が読めてるか確認
  console.log("SPOTIFY_PLAYLIST_API_URL", SPOTIFY_PLAYLIST_API_URL);
  console.log("REDIRECT_URL", REDIRECT_URL);
  console.log("SPOTIFY_AUTH_URL", SPOTIFY_AUTH_URL);
  console.log("SPOTIFY_CLIENT_ID", SPOTIFY_CLIENT_ID);

  try {
    // ユーザーのプレイリストを取得
    const playlistsResponse = await fetch(SPOTIFY_PLAYLIST_API_URL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!playlistsResponse.ok) {
      throw new Error(`Failed to fetch playlists: ${playlistsResponse.status}`);
    }

    const playlistsData = await playlistsResponse.json();
    const spotifyData: SpotifyData = {};

    // 各プレイリストごとの楽曲データを取得
    for (const playlist of playlistsData.items) {
      const playlistName = playlist.name;

      // プレイリストのトラックデータを取得
      const tracksResponse = await fetch(playlist.tracks.href, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (!tracksResponse.ok) {
        throw new Error(
          `Failed to fetch tracks for playlist ${playlistName}: ${tracksResponse.status}`
        );
      }

      const tracksData = await tracksResponse.json();

      // トラックデータをフォーマットして、"song" と "artist" に整形
      const formattedTracks: SongData[] = tracksData.items.map(
        (trackItem: any) => ({
          song: trackItem.track.name,
          artist: trackItem.track.artists
            .map((artist: any) => artist.name)
            .join(", "),
        })
      );

      // プレイリスト名をキーとして楽曲データを格納
      spotifyData[playlistName] = formattedTracks;
    }

    return spotifyData;
  } catch (error) {
    console.error("Error formatting Spotify data:", error);
    throw error;
  }
};

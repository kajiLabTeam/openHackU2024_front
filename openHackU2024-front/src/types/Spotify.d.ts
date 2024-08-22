export type getUserPlaylistRequest = {
    spotify_date: Spotify_date[];
    display_name: string;
    user_id: string;
};

export type SongData = {
    song: string;
    artist: string;
};
  
export type SpotifyData = {
    [playlistName: string]: SongData[];
};
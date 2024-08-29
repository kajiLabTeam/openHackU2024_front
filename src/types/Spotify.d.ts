export type getUserPlaylistRequest = {
    spotify_data: SpotifyData[];
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
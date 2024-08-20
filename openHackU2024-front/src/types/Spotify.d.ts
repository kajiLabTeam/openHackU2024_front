export type getUserPlaylistRequest = {
    spotify_date: Playlist[];
    display_name: string;
    user_id: string;
};

type Playlists = {  
    playlist:Songs[];
};

type Songs = { 
    song : string;
    artist : string;
};
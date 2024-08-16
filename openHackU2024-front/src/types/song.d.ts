export type account_aline = {
    spotify_data: string;
    display_name: string;
    user_id: string;
};
  
export type room_access_post = {
    pass: string;
    display_name: string;
    user_id: string;
};
  
export type room_access_response = {
    display_names: display_names[];
};
  
export type room_get_post = {
    pass: string;
};

export type room_get_response = {
    display_names: display_names[];
    song_data: song_data[];
};

export type display_names = {
    display_name: string;
    user_id: string;
};

export type song_data = {
    song_title : string;
    song_artist : string;
    overlap : number;
};
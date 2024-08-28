import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import LoggedIn from './loggedin';
import { getTokenFromUrl,formatSpotifyData } from './hooks/Spotify';
import { useSong } from './hooks/song';
import { AccountAlinePostRequest } from './types/song';

// トークンの型を定義
type Token = string | null;

export function App() {

  const {
    postAccount,
    postRoomAccess,
    postRoomGet,
    postRoomJoin,
  } = useSong();

  const onClickRoomAccess = async () => {
    const request = {
      pass: "とめぇぃとぉ",
      display_name: "test",
      user_id: "test",
    };
    const response = await postRoomAccess(request);
    console.log(response);
  }

  const onClickRoomGet = async () => {    
    const request = {
      pass: "とめぇぃとぉ",
      display_name: "test",
      user_id: "test",
    };
    const response = await postRoomGet(request);
    console.log(response);
  }

  const onClickGetPlaylists = async () => {
    if (token) {
      const response = await formatSpotifyData(token);
      const request:AccountAlinePostRequest = {
        spotify_data: response,
        display_name: "test",
        user_id: "test",
      };
      console.log(request);
      const response2 = await postAccount(request);

      console.log(response2);
    }
  }

  const onClickRoomJoin = async () => {
    const request = {
      pass: "とめぇぃとぉ",
      display_name: "test",
      user_id: "test",
    };
    const response = await postRoomJoin(request);
    console.log(response);
  }

  // useStateに型注釈を追加
  const [token, setToken] = useState<Token>(null);

  useEffect(() => {
    const hash = getTokenFromUrl(); // getTokenFromUrlが正しい構造を返すことを確認
    console.log(hash);

    // URLのハッシュをクリア
    window.location.hash = '';

    const accessToken = hash?.access_token; // オプショナルチェーンで安全にトークンを取得

    if (accessToken) {
      setToken(accessToken);
    }

    console.log('I HAVE A TOKEN', accessToken);

  }, []);

  return (
    <div className="App">
      {token ? <LoggedIn /> : <Login />}
      <button onClick={onClickRoomAccess}>部屋に入る</button>
      <button onClick={onClickRoomGet}>データの取得</button>
      <button onClick={onClickRoomJoin}>部屋に参加</button>
      <button onClick={onClickGetPlaylists}>プレイリストを取得</button>
    </div>
  );
}

export default App;

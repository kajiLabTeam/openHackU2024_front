import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import LoggedIn from './loggedin';
import { getTokenFromUrl } from './hooks/Spotify';

// トークンの型を定義
type Token = string | null;

function App() {
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
    </div>
  );
}

export default App;

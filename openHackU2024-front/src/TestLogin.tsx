import { accessUrl } from "./hooks/Spotify";

function TestLogin() {
  return (
    <div className="Login">
      <h2>ログイン前です</h2>
      <a href={accessUrl}>spotifyへログイン</a>
    </div>
  );
}

export default TestLogin;

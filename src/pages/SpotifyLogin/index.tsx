import { accessUrl } from "@/hooks/Spotify";
import logo from "@/assets/logo.png";

import { SpotifyLoginButton } from "@/components/SpotifyLoginButton";
import styles from "./styles.module.scss";

export function SpotifyLoginPage() {
  const handleLogin = () => {
    window.location.href = accessUrl; // Spotifyログインページにリダイレクト
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.buttonContainer}>
          <SpotifyLoginButton onClick={handleLogin}>
            Spotifyでログイン
          </SpotifyLoginButton>
        </div>
      </div>
    </>
  );
}

export default SpotifyLoginPage;

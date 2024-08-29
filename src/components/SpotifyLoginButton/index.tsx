import { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const SpotifyLoginButton = ({ onClick, children }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

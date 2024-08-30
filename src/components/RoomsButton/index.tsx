import { ReactNode } from "react";
import styles from "./styles.module.scss";
import login from "../../assets/login.svg";
import make from "../../assets/make.svg";

type Props = {
  onClick: () => void;
  children: ReactNode;
  id: string;
};

export const RoomButton = ({ onClick, children, id }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {id === "join" ? (
        <img className={styles.logo} src={login} alt="Logo" />
      ) : (
        <img className={styles.logo} src={make} alt="Logo" />
      )}
      {children}
    </button>
  );
};

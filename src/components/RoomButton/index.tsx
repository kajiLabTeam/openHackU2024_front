import { ReactNode } from "react";
import styles from "./styles.module.scss";
import RoomSVG from "./RoomSVG";

type Props = {
  type: "join" | "create";
  children: ReactNode;
  onClick: () => void;
};

export const RoomButton = ({ type, children, onClick }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div>
        <RoomSVG type={type} />
      </div>
      <p>{children}</p>
    </button>
  );
};

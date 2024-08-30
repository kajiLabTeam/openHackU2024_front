import { ReactNode } from "react";
import styles from "./styles.module.scss";
import RoomSVG from "./RoomSVG";

type Props = {
  id: string;
  children: ReactNode;
  onClick: () => void;
};

export const RoomButton = ({ onClick, children, id }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div>
        <RoomSVG id={id} />
      </div>
      <div>{children}</div>
    </button>
  );
};

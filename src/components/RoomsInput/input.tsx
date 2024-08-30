import { ChangeEvent } from "react";
import styles from "./styles.module.scss";

type Props = {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const RoomInput = ({ value, placeholder, onChange }: Props) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

import styles from "./styles.module.scss";

type Props = {
  password: string;
};

function RoomText({ password }: Props) {
  return (
    <div className={styles.container}>
      <h1>{password}部屋</h1>
    </div>
  );
}

export default RoomText;

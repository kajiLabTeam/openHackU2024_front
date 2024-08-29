import styles from "./styles.module.scss";

type Props = {
  title: string;
  artist: string;
};

function SongItem({ title, artist }: Props) {
  console.log(title, artist);
  return (
    <div className={styles.container}>
      <div>
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
    </div>
  );
}

export default SongItem;

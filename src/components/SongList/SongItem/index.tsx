import styles from "./styles.module.scss";

type Props = {
  title: string;
  artist: string;
  overlap: number;
};

function SongItem({ title, artist, overlap }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.songContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.artist}>{artist}</p>
      </div>
      <div className={styles.overlapContainer}>
        <p className={styles.peopleAmount}>{overlap}</p>
        <p className={styles.peopleLabel}>人</p>
      </div>
    </div>
  );
}

export default SongItem;

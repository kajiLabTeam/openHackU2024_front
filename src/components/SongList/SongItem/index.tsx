import styles from "./styles.module.scss";

type Props = {
  title: string;
  artist: string;
  overlap: number;
};

function SongItem({ title, artist, overlap }: Props) {
  console.log(title, artist);
  return (
    <div className={styles.container}>
      <div className={styles.songContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.artist}>{artist}</p>
      </div>
      <div className={styles.overlapContainer}>
        <p className={styles.peopleAmountParagraph}>{overlap}</p>
        <p className={styles.peopleParagraph}>人</p>
      </div>
    </div>
  );
}

export default SongItem;

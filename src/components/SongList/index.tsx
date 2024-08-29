import { SongData } from "../../types/song";
import SongItem from "./SongItem";
import styles from "./styles.module.scss";

type Props = {
  songData: SongData[];
};

function SongList({ songData }: Props) {
  return (
    <div className={styles.container}>
      {songData.map((song, index) => (
        <SongItem
          key={index}
          title={song.song_title}
          artist={song.song_artist}
        />
      ))}
    </div>
  );
}

export default SongList;

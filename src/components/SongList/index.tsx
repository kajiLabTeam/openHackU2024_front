import { SongData } from "@/types/song";
import SongItem from "./SongItem";
import styles from "./styles.module.scss";

type Props = {
  songData: SongData[];
};

function SongList({ songData }: Props) {
  const sortedSongData = [...songData].sort((a, b) => b.overlap - a.overlap);

  return (
    <div className={styles.container}>
      {sortedSongData.map((song, index) => (
        <SongItem
          key={index}
          title={song.song_title}
          artist={song.song_artist}
          overlap={song.overlap}
        />
      ))}
    </div>
  );
}

export default SongList;

import { useState, useEffect } from "react";
import { useSong } from "../../hooks/song";
import { useRecoilState } from "recoil";
import { userDataState } from "../../store/UserData";
import { useNavigate } from "react-router-dom";
import { RoomGetPostRequest, RoomGetPostResponse } from "../../types/song";

function SongListPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(userDataState);
  const { postRoomAccess } = useSong();
  const [roomData, setRoomData] = useState<RoomGetPostResponse | undefined>(
    undefined
  );

  const JoinUserList = async () => {
    const request: RoomGetPostRequest = {
      pass: userData ? userData.pass : "",
      display_name: userData ? userData.display_name : "",
      user_id: userData ? userData.user_id : "",
    };

    console.log(request);
    const response = (await postRoomAccess(
      request
    )) as unknown as RoomGetPostResponse;
    setRoomData(response);
    // setResponse(ROOM_GET_RESPONSE); // モックデータを設定
  };

  useEffect(() => {
    JoinUserList();
    const intervalId = setInterval(JoinUserList, 60000); // 60000ミリ秒 = 1分

    return () => clearInterval(intervalId);
  }, []);

  if (!roomData) return <div>Loading...</div>;

  // overlapの数ごとにsong_dataをグループ化
  const groupedByOverlap: { [key: number]: typeof roomData.song_data } =
    roomData.song_data.reduce((groups, song) => {
      const { overlap } = song;
      if (!groups[overlap]) {
        groups[overlap] = [];
      }
      groups[overlap].push(song);
      return groups;
    }, {} as { [key: number]: typeof roomData.song_data });

  return (
    <div>
      <h1>Display Names</h1>
      <ul>
        {roomData.display_names.map((user, index) => (
          <li key={user.user_id}>{user.display_name}</li>
        ))}
      </ul>

      <h1>Song Data</h1>
      {Object.keys(groupedByOverlap).map((overlap) => (
        <div key={overlap}>
          <h2>Overlap: {overlap} people</h2>
          <ul>
            {groupedByOverlap[parseInt(overlap)].map((song, index) => (
              <li key={index}>
                <strong>{song.song_title}</strong> by {song.song_artist}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SongListPage;

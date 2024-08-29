import { useState, useEffect } from "react";

import { useSong } from "../hooks/song";
import { useRecoilState } from "recoil";
import { globalFunctionState } from "../store/UserData";
import { useNavigate } from "react-router-dom";

import { RoomAccessPostRequest } from "../types/song";

function Home() {
  const navigate = useNavigate();
  const { postRoomAccess,postRoomJoin } = useSong();
  const [userData, setUserData] = useRecoilState(globalFunctionState);

  const handleJoin = async () => {
    const pass = (document.getElementById("pass") as HTMLInputElement).value;
    if (pass) {
      try {
        const request: RoomAccessPostRequest = {
          pass: pass,
          display_name: userData ? userData.display_name : "",
          user_id: userData ? userData.user_id : "",
        };

        console.log(request);
        /*
        const response = await postRoomAccess(request);
        console.log(response);
        const response2 = await postRoomJoin(request);
        console.log(response2);
        */
        

        setUserData({
          user_id:userData ? userData.user_id : "",
          display_name: userData ? userData?.display_name : "",
          pass: pass,
        })
        navigate("/room");
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div className="Home">
      <h2>合言葉</h2>
      <input type="text" id="pass" />
      <button onClick={handleJoin}>グループに参加</button>
    </div>
  )
}

export default Home
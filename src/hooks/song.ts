import {
  AccountAlinePostRequest,
  ErrorResponse,
  RoomAccessPostRequest,
  RoomGetPostRequest,
  RoomAccessPostResponse,
  AccountAlinePostResponse,
  RoomJoinPostRequest,
  RoomJoinPostResponse,
} from "@types/song";

export const useSong = () => {
  const postAccount = async (
    request: AccountAlinePostRequest
  ): Promise<AccountAlinePostResponse | ErrorResponse> => {
    const response = await fetch(
      "http://192.168.101.23:8888/api/account/align",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      }
    );
    if (response.status !== 200) {
      const data: ErrorResponse = await response.json();
      return data;
    }
    const data: AccountAlinePostResponse = await response.json();
    return data;
  };

  const postRoomAccess = async (
    request: RoomAccessPostRequest
  ): Promise<RoomAccessPostResponse | ErrorResponse> => {
    const response = await fetch("http://192.168.101.23:8888/api/room/access", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    if (response.status !== 200) {
      const data: ErrorResponse = await response.json();
      return data;
    }
    const data: RoomAccessPostResponse = await response.json();
    return data;
  };

  const postRoomGet = async (
    request: RoomGetPostRequest
  ): Promise<RoomGetPostRequest | ErrorResponse> => {
    const response = await fetch("http://192.168.101.23:8888/api/room/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    if (response.status !== 200) {
      const data: ErrorResponse = await response.json();
      return data;
    }
    const data: RoomGetPostRequest = await response.json();
    return data;
  };

  const postRoomJoin = async (
    request: RoomJoinPostRequest
  ): Promise<RoomJoinPostResponse | ErrorResponse> => {
    const response = await fetch("http://192.168.101.23:8888/api/room/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    if (response.status !== 200) {
      const data: ErrorResponse = await response.json();
      return data;
    }
    const data: RoomJoinPostResponse = await response.json();
    return data;
  };

  return { postAccount, postRoomAccess, postRoomGet, postRoomJoin };
};

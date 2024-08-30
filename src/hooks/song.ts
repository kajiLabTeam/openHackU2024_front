import {
  AccountAlinePostRequest,
  ErrorResponse,
  RoomAccessPostRequest,
  RoomGetPostRequest,
  RoomAccessPostResponse,
  AccountAlinePostResponse,
  RoomJoinPostRequest,
  RoomJoinPostResponse,
  RoomGetPostResponse,
} from "@/types/song";

export const useSong = () => {
  const postAccount = async (
    request: AccountAlinePostRequest
  ): Promise<AccountAlinePostResponse | ErrorResponse> => {
    const response = await fetch(
      "https://uta-match.kitune-udon.com/api/account/align",
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
    const response = await fetch(
      "https://uta-match.kitune-udon.com/api/room/access",
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
    const data: RoomAccessPostResponse = await response.json();
    return data;
  };

  const postRoomGet = async (
    request: RoomGetPostRequest
  ): Promise<RoomGetPostResponse | ErrorResponse> => {
    const response = await fetch(
      "https://uta-match.kitune-udon.com/api/room/get",
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
    const data: RoomGetPostResponse = await response.json();
    return data;
  };

  const postRoomJoin = async (
    request: RoomJoinPostRequest
  ): Promise<RoomJoinPostResponse | ErrorResponse> => {
    const response = await fetch(
      "https://uta-match.kitune-udon.com/api/room/join",
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
    const data: RoomJoinPostResponse = await response.json();
    return data;
  };

  return { postAccount, postRoomAccess, postRoomGet, postRoomJoin };
};

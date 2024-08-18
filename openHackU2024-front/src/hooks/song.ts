import { useState } from 'react';
import { AccountAlinePostRequest, RoomAccessPostRequest, RoomAccessPostResponse, AccountAlinePostResponse ,RoomJoinPostRequest,RoomJoinPostResponse} from '../types/song';

export const useSong = () => {
    const postAccount = async (request: AccountAlinePostRequest): Promise<AccountAlinePostResponse> => {
        const response = await fetch("https://tomato.kitune-udon.com/api/account/align", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
             },
            body: JSON.stringify({request}),
        });
        const data: AccountAlinePostResponse = await response.json();
        return data;
    };

    const postRoomAccess = async (request: RoomAccessPostRequest): Promise<RoomAccessPostResponse> => {
        const response = await fetch("https://tomato.kitune-udon.com/api/room/access", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({request}),
        });
        const data: RoomAccessPostResponse = await response.json();
        return data;
    };

    const postRoomGet = async (request: RoomAccessPostRequest): Promise<RoomAccessPostResponse> => {
        const response = await fetch("https://tomato.kitune-udon.com/api/room/get", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({request}),
        });
        
        const data: RoomAccessPostResponse = await response.json();
        return data;
    }

    const postRoomJoin = async (request: RoomJoinPostRequest): Promise<RoomJoinPostResponse> => {
        const response = await fetch("https://tomato.kitune-udon.com/api/room/join", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({request}),
        });
        const data: RoomJoinPostResponse = await response.json();
        return data;
    }

    return { postAccount, postRoomAccess, postRoomGet,postRoomJoin };

}   
import { RoomAccessPostResponse, RoomGetPostResponse } from "@/types/song";

export const ROOM_ACCESS_RESPONSE: RoomAccessPostResponse = {
  states: "success",
  display_names: [
    {
      display_name: "山田 太郎",
      user_id: "c2d10d2c-7e90-4f7b-a5e9-f5b4f1e63e47",
    },
    {
      display_name: "佐藤 花子",
      user_id: "d3a15b1a-6f89-4b0e-9f58-3a334f9f9e2e",
    },
    {
      display_name: "鈴木 一郎",
      user_id: "e2f13c0a-5e6d-4c7b-94f8-2a4c8e8f6e3c",
    },
    {
      display_name: "田中 美咲",
      user_id: "a9d20e8b-8e6a-4f7c-85f6-b8d5f4f3f7a9",
    },
    {
      display_name: "高橋 優",
      user_id: "b3e14d0a-6c9b-4e3f-94d7-1c5e8f9b8e1a",
    },
    {
      display_name: "伊藤 翔",
      user_id: "f5d11e2c-7d8a-4f3b-85e8-2d5f7a4c9b3a",
    },
    {
      display_name: "松本 由美",
      user_id: "d6e18a0a-9e5f-4e6b-85f7-1e3c5b8f9e2e",
    },
    {
      display_name: "中村 大輔",
      user_id: "e4f15b2a-6d7c-4f8b-9f58-2d4a3f9f7c5b",
    },
  ],
};

export const ROOM_ACCESS_ERROR_RESPONSE: RoomAccessPostResponse = {
  states: "error",
  display_names: [],
};

export const ROOM_GET_RESPONSE: RoomGetPostResponse = {
  display_names: [
    {
      display_name: "山田 太郎",
      user_id: "c2d10d2c-7e90-4f7b-a5e9-f5b4f1e63e47",
    },
    {
      display_name: "佐藤 花子",
      user_id: "d3a15b1a-6f89-4b0e-9f58-3a334f9f9e2e",
    },
    {
      display_name: "鈴木 一郎",
      user_id: "e2f13c0a-5e6d-4c7b-94f8-2a4c8e8f6e3c",
    },
    {
      display_name: "田中 美咲",
      user_id: "a9d20e8b-8e6a-4f7c-85f6-b8d5f4f3f7a9",
    },
    {
      display_name: "高橋 優",
      user_id: "b3e14d0a-6c9b-4e3f-94d7-1c5e8f9b8e1a",
    },
    {
      display_name: "伊藤 翔",
      user_id: "f5d11e2c-7d8a-4f3b-85e8-2d5f7a4c9b3a",
    },
    {
      display_name: "松本 由美",
      user_id: "d6e18a0a-9e5f-4e6b-85f7-1e3c5b8f9e2e",
    },
    {
      display_name: "中村 大輔",
      user_id: "e4f15b2a-6d7c-4f8b-9f58-2d4a3f9f7c5b",
    },
  ],
  song_data: [
    {
      song_title: "夜に駆ける",
      song_artist: "YOASOBI",
      overlap: 6,
    },
    {
      song_title: "Lemon",
      song_artist: "米津玄師",
      overlap: 5,
    },
    {
      song_title: "Pretender",
      song_artist: "Official髭男dism",
      overlap: 4,
    },
    {
      song_title: "ドライフラワー",
      song_artist: "優里",
      overlap: 3,
    },
    {
      song_title: "打上花火",
      song_artist: "DAOKO × 米津玄師",
      overlap: 2,
    },
    {
      song_title: "マリーゴールド",
      song_artist: "あいみょん",
      overlap: 6,
    },
    {
      song_title: "白日",
      song_artist: "King Gnu",
      overlap: 5,
    },
    {
      song_title: "怪物",
      song_artist: "YOASOBI",
      overlap: 4,
    },
    {
      song_title: "シンデレラボーイ",
      song_artist: "Saucy Dog",
      overlap: 3,
    },
    {
      song_title: "明け星",
      song_artist: "LiSA",
      overlap: 2,
    },
    {
      song_title: "ブルーベリーソーダ",
      song_artist: "SEKAI NO OWARI",
      overlap: 1,
    },
    {
      song_title: "不可幸力",
      song_artist: "Vaundy",
      overlap: 1,
    },
    {
      song_title: "水平線",
      song_artist: "back number",
      overlap: 2,
    },
    {
      song_title: "ラブカ?",
      song_artist: "ササノマリイ",
      overlap: 3,
    },
    {
      song_title: "I LOVE...",
      song_artist: "Official髭男dism",
      overlap: 4,
    },
  ],
};

export const DISPLAY_USERS = [
  {
    name: "taro",
  },
  {
    name: "sakina",
  },
  {
    name: "hanako",
  },
  {
    name: "ayaka",
  },
  {
    name: "mizutnai",
  },
  {
    name: "togawa",
  },
  {
    name: "koki",
  },
  {
    name: "miho",
  },
  {
    name: "iroha",
  },
  {
    name: "akua",
  },
];

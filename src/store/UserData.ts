import { atom } from "recoil";

type UserData = {
  display_name: string;
  token: string;
  user_id: string;
  pass: string;
};

export const userDataState = atom<UserData | undefined>({
  key: "userDataState",
  default: undefined,
});

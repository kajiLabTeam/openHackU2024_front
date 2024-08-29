import { atom } from "recoil";

type User = {
  id: string;
  name: string;
};

export const userState = atom<User | undefined>({
  key: "userState",
  default: undefined,
});

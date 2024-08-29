import { atom } from "recoil";

export const passState = atom<string>({
  key: "passState",
  default: "",
});

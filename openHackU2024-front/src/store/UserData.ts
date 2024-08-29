import { atom } from 'recoil';

type UserData = {
    display_name: string;
    user_id: string;
    pass: string;
    };

export const globalFunctionState = atom<UserData |undefined>({
  key: 'globalFunctionState',
  default: undefined
});
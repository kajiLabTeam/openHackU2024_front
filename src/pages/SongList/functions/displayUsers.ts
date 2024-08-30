import { DisplayUser, User } from "@/types/user";

function assignAvatarsToUsers(
  users: User[],
  avatars: string[],
  defaultAvatar: string
): DisplayUser[] {
  return users.map((user, index) => ({
    ...user,
    avatar: avatars[index] || defaultAvatar,
  }));
}

// 空のユーザーを生成する関数
function createEmptyUsers(count: number, defaultAvatar: string): DisplayUser[] {
  return Array(count).fill({ name: "", avatar: defaultAvatar });
}

// 全てのユーザーをまとめる関数
export function generateDisplayUsers(
  users: User[],
  avatars: string[],
  defaultAvatar: string,
  totalSlots: number
): DisplayUser[] {
  const mappedUsers = assignAvatarsToUsers(users, avatars, defaultAvatar);
  const emptySlotsCount = totalSlots - mappedUsers.length;
  const emptyUsers = createEmptyUsers(
    Math.max(emptySlotsCount, 0),
    defaultAvatar
  );

  return [...mappedUsers, ...emptyUsers];
}

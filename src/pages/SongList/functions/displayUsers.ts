import { DisplayName } from "@/types/song";
import { DisplayUser } from "@/types/user";

function assignAvatarsToUsers(
  displayName: DisplayName[],
  avatars: string[],
  defaultAvatar: string
): DisplayUser[] {
  return displayName.map((user, index) => {
    return {
      name: user.display_name,
      avatar: avatars[index] || defaultAvatar,
    };
  });
}

function createEmptyUsers(count: number, defaultAvatar: string): DisplayUser[] {
  return Array(count).fill({ name: "", avatar: defaultAvatar });
}

export function generateDisplayUsers(
  displayName: DisplayName[],
  avatars: string[],
  defaultAvatar: string,
  totalSlots: number
): DisplayUser[] {
  const mappedUsers = assignAvatarsToUsers(displayName, avatars, defaultAvatar);
  const emptySlotsCount = totalSlots - mappedUsers.length;
  const emptyUsers = createEmptyUsers(
    Math.max(emptySlotsCount, 0),
    defaultAvatar
  );

  return [...mappedUsers, ...emptyUsers];
}

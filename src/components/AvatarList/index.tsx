import { DisplayUser } from "@/types/user";
import AvatarItem from "./AvatarItem";
import styles from "./styles.module.scss";
import { NUMBER_OF_AVATARS } from "@/const/avatar";

type Props = {
  displayUsers: DisplayUser[];
};

function AvatarList({ displayUsers }: Props) {
  const displayedUsers = displayUsers.slice(0, NUMBER_OF_AVATARS);

  return (
    <div className={styles.container}>
      {displayedUsers.map((user, index) => (
        <AvatarItem key={index} name={user.name} avatar={user.avatar} />
      ))}
    </div>
  );
}

export default AvatarList;

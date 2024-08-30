import { DisplayUser } from "../../types/user";
import AvatarItem from "./AvatarItem";

import styles from "./styles.module.scss";

type Props = {
  displayUsers: DisplayUser[];
};

function AvatarList({ displayUsers }: Props) {
  return (
    <div className={styles.container}>
      {displayUsers.map((user, index) => (
        <AvatarItem key={index} name={user.name} avatar={user.avatar} />
      ))}
    </div>
  );
}

export default AvatarList;

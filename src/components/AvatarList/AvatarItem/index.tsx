import styles from "./styles.module.scss";

type Props = {
  name: string;
  avatar: string;
};

function AvatarItem({ name, avatar }: Props) {
  return (
    <div className={styles.container}>
      {name === "" ? (
        <img className={styles.avatarNoneImg} src={avatar} alt={name} />
      ) : (
        <img className={styles.avatarImg} src={avatar} alt={name} />
      )}
      <p>{name}</p>
    </div>
  );
}

export default AvatarItem;

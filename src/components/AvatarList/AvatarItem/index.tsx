import styles from "./styles.module.scss";

type Props = {
  name: string;
  avatar: string;
};

function AvatarItem({ name, avatar }: Props) {
  return (
    <div className={styles.container}>
      <img src={avatar} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default AvatarItem;

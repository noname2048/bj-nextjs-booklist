import styles from "MainHeader.module.scss";
import Logo from "./Logo";
import Auth from "./Auth";

export default function MainHeader() {
  return (
    <div className={styles.header}>
      <Logo />
      <Auth />
    </div>
  );
}

import styles from "./MainHeader.module.scss";
import Logo from "./Logo";
import Auth from "./Auth";
import MainNav from "./MainNav";

export default function MainHeader() {
  return (
    <div className={styles.MainHeader}>
      <Logo />
      <Auth />
    </div>
  );
}

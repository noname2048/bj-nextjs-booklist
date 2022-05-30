import styles from "Logo.module.scss";
import { GiBlackBook } from "react-icons/gi";

export default function Logo() {
  return (
    <logo className={styles.logo}>
      <GiBlackBook />
    </logo>
  );
}

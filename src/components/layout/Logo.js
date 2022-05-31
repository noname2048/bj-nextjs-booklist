import styles from "./Logo.module.scss";
import { GiBlackBook } from "react-icons/gi";

export default function Logo() {
  return (
    <logo className={styles.logo}>
      <h1>
        <GiBlackBook />
        BookISBN_DB
      </h1>
    </logo>
  );
}

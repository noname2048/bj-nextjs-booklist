import styles from "./IndexHeader.module.scss";
import { BiSearch } from "react-icons/bi";
import { BsFillFilePlusFill } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";

export default function IndexHeader() {
  return (
    <div className={styles.header}>
      <logo className={styles.logo}>
        <GiBlackBook />
        MyBooks
      </logo>
      <label className={styles.label}>
        <input type="checkbox" name="" />
        <span>
          <BiSearch />
        </span>
        <span></span>
      </label>
      <label htmlFor="">github</label>
    </div>
  );
}

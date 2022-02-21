import styles from "./IndexHeader.module.scss";
import { BiSearch } from "react-icons/bi";
import { BsFillFilePlusFill } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
import classNames from "classnames/bind";

var cx = classNames.bind(styles);

export default function IndexHeader() {
  const [tabname, setTabname] = useState("search");

  return (
    <div className={styles.header}>
      <logo className={styles.logo}>
        <GiBlackBook />
        MyBooks
      </logo>
      <div className={styles["toogle-tab"]}>
        <div
          onClick={() => setTabname("search")}
          className={cx({ on: tabname === "search" })}
        >
          <BiSearch />
          search
        </div>
        <div
          onClick={() => setTabname("request")}
          className={cx({ on: tabname === "request" })}
        >
          <BsFillFilePlusFill />
          request
        </div>
      </div>
      <SiGithub />
    </div>
  );
}

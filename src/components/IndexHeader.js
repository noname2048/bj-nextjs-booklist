import Link from "next/link";
import { useState } from "react";
// styles
import styles from "./IndexHeader.module.scss";
import classNames from "classnames/bind";
// icons
import { BiSearch } from "react-icons/bi";
import { BsFillFilePlusFill } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import { SiGithub } from "react-icons/si";

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
        <Link href="/">
          <a
            onClick={() => setTabname("search")}
            className={cx({ on: tabname === "search" })}
          >
            <BiSearch />
            search
          </a>
        </Link>
        <Link href="/request">
          <a
            onClick={() => setTabname("request")}
            className={cx({ on: tabname === "request" })}
          >
            <BsFillFilePlusFill />
            request
          </a>
        </Link>
        <Link href="/request/recent">
          <a>
            최근요청들
          </a>
        </Link>
      </div>
      <SiGithub />
    </div>
  );
}

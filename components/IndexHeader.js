import styles from "./IndexHeader.module.scss";
import { BiSearch } from "react-icons/bi";
import { BsFillFilePlusFill } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
import classNames from "classnames/bind";
import Link from "next/link";

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
        <Link href="/#search">
          <a
            onClick={() => setTabname("search")}
            className={cx({ on: tabname === "search" })}
          >
            <BiSearch />
            search
          </a>
        </Link>
        <Link href="/#newrequest">
          <a
            onClick={() => setTabname("request")}
            className={cx({ on: tabname === "request" })}
          >
            <BsFillFilePlusFill />
            request
          </a>
        </Link>
      </div>
      <SiGithub />
    </div>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const router = useRouter();
  let highLightTarget = -1;
  const highLightIndex = {
    "^/": 0,
    "^/search": 1,
    "^/newrequest": 2,
    "^/recentresponses": 3,
  };
  for (let k in highLightIndex) {
    if (RegExp(k).test(router.asPath)) highLightTarget = highLightIndex[k];
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <span>|||</span>{" "}
        <Link href="/search">
          <a className={highLightTarget === 0 ? styles.selected : ""}>
            BookISBN
          </a>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li
            className={`${styles.li} ${
              highLightTarget === 1 ? styles.selected : ""
            }`}
          >
            <Link href="/search">
              <a>search</a>
            </Link>
          </li>
          <li
            className={`${styles.li} ${
              highLightTarget === 2 ? styles.selected : ""
            }`}
          >
            <Link href="/newrequest">
              <a>
                make
                <br />
                request
              </a>
            </Link>
          </li>
          <li
            className={`${styles.li} ${
              highLightTarget === 3 ? styles.selected : ""
            }`}
          >
            <Link href="/recentrequest">
              <a>
                recent
                <br />
                response
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.auth}>signup | login</div>
    </div>
  );
}

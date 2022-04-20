import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const router = useRouter();
  let highLightTarget = -1;
  if (RegExp("^/search").test(router.asPath)) highLightTarget = 0;
  else if (RegExp("^/makerequest").test(router.asPath)) highLightTarget = 1;
  else if (RegExp("^/recentresponses").test(router.asPath)) highLightTarget = 2;

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <span>|||</span> BookISBN
      </div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li
            className={`${styles.li} ${
              highLightTarget === 0 ? styles.selected : ""
            }`}
          >
            <Link href="/search">
              <a>search</a>
            </Link>
          </li>
          <li
            className={`${styles.li} ${
              highLightTarget === 1 ? styles.selected : ""
            }`}
          >
            <Link href="login">
              <a>
                make
                <br />
                request
              </a>
            </Link>
          </li>
          <li
            className={`${styles.li} ${
              highLightTarget === 2 ? styles.selected : ""
            }`}
          >
            <Link href="#">
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

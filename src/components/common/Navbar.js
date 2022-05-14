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
    "^/requests": 3,
  };
  let temp = 0;

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
          <Link href="/search">
            <a
              className={`${styles.li} ${
                highLightTarget === 1 ? styles.selected : ""
              }`}
            >
              search
            </a>
          </Link>
          <Link href="/newrequest">
            <a
              className={`${styles.li} ${
                highLightTarget === 2 ? styles.selected : ""
              }`}
            >
              make
              <br />
              request
            </a>
          </Link>
          <Link href="/requests">
            <a
              className={`${styles.li} ${
                highLightTarget === 3 ? styles.selected : ""
              }`}
            >
              recent
              <br />
              response
            </a>
          </Link>
        </ul>
      </nav>
      <div className={styles.auth}>signup | login</div>
    </div>
  );
}

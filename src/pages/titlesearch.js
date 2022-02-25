import Link from "next/link";
import Router from "next/router";
import styles from "../../styles/List.module.scss";
import { BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    (async function getSearch() {
      await fetch("localhost:8000/search/title/");
    })();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <Link href="/">
          <a>home</a>
        </Link>
        <div className={styles.searchbox}>
          <span>titlesearch</span>
          <label>
            <input
              type="text"
              onKeyPress={(event) => {
                if (event.key == "Enter") Router.push("/titlesearch");
              }}
            />
            <BsSearch />
          </label>
        </div>
      </div>
      <div className={styles["list-container"]}>
        <div className={styles.card}></div>
      </div>
      <footer></footer>
    </div>
  );
}

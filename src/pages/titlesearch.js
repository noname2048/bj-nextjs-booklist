import Link from "next/link";
import Router from "next/router";
import styles from "../../styles/Home.module.scss";

export default function Page() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>home</a>
      </Link>
      <div className={styles.navigation}>
        <span>title</span>
        <input
          type="text"
          onKeyPress={(event) => {
            if (event.key == "Enter") Router.push("/titlesearch");
          }}
        />
        <span>button</span>
      </div>
      <div className={styles["list-container"]}>
        <div className={styles.card}></div>
      </div>
      <footer></footer>
    </div>
  );
}

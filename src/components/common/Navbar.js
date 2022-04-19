import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BookISBN</div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>search</li>
          <li className={styles.li}>
            make
            <br />
            request
          </li>
          <li className={styles.li}>
            recent
            <br />
            response
          </li>
        </ul>
      </nav>
      <div className={styles.auth}>signup | login</div>
    </div>
  );
}

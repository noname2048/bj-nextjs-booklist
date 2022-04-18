import styles from "./NavBar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BookISBN</div>
      <nav className={styles.nav}>
        <ul>
          <li>search</li>
          <li>
            make
            <br />
            request
          </li>
          <li>
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

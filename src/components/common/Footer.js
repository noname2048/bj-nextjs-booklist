import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>@ 2022</p> <p>해당 웹사이트는 알라딘 API를 이용하여 만들어졌습니다.</p>
      <p>sungwook.csw@gmail.com</p>
      <p>nextjs + fastapi</p>
    </div>
  );
}

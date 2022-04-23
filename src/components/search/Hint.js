import styles from "./Hint.module.scss";
import { useRouter } from "next/router";

export default function Hint(props) {
  const { text, url } = props;
  const router = useRouter();
  return (
    <div
      className={styles.container}
      onClick={() => {
        router.push(url);
      }}
    >
      <p>{text} 로 검색해보기</p>
    </div>
  );
}

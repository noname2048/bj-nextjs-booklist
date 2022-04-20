import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import styles from "./TitleSearch.module.scss";

export default function TitleSearch({ children, props }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>
        <span className={styles.span}>제목</span>으로 검색하기
      </h2>
      <label>
        <input
          type="text"
          onKeyPress={(event) => {
            if (event.key == "Enter" && titleRef.current.value !== "")
              router.push(`/titlesearch?title=${event.target.value}`);
          }}
        />
        <BsSearch
          onClick={() => {
            pushTitleSearch();
          }}
        />
      </label>
    </div>
  );
}

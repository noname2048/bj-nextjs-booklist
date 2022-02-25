import { useRef } from "react";
import { useRouter } from "next/router";
import styles from "./IndexMain.module.scss";
import { BsSearch } from "react-icons/bs";
import { FaBarcode } from "react-icons/fa";

export default function MainTwoSide() {
  const router = useRouter();
  const titleRef = useRef();
  const isbnRef = useRef();

  function pushTitleSearch() {
    router.push(`/titlesearch?title=${titleRef.current.value}`);
  }

  function pushIsbnSearch() {
    router.push(`/isbnsearch?isbn=${isbnRef.current.value}`);
  }

  return (
    <div className={styles.main}>
      <div>
        <h2>
          <span>제목</span>으로 검색하기
        </h2>
        <label>
          <input
            type="text"
            name=""
            id=""
            onKeyPress={(event) => {
              if (event.key == "Enter" && titleRef.current.value !== "")
                pushTitleSearch();
            }}
            ref={titleRef}
          />
          <BsSearch
            onClick={() => {
              pushTitleSearch();
            }}
          />
        </label>
      </div>
      <div>
        <h2>
          <span>ISBN</span>으로 검색하기
        </h2>
        <label>
          <input
            type="text"
            onKeyPress={(event) => {
              if (event.key == "Enter" && isbnRef.current.value !== "")
                pushIsbnSearch();
            }}
            ref={isbnRef}
          />
          <FaBarcode
            onClick={() => {
              pushIsbnSearch();
            }}
          />
        </label>
      </div>
    </div>
  );
}

import styles from "./CommonSearch.module.scss";
import { useState } from "react";
import { Router, useRouter } from "next/router";

export default function CommonSearch(props) {
  const { verbose, key, url, svg: Comp, backgroundColor } = props;
  const [inputValue, setInputValue] = useState("");
  const resetInputValue = () => {
    setInputValue("");
  };
  const router = useRouter();
  const pushDetailPage = () => {
    router.push(`${url}?${key}=${inputValue}`);
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <h2>
        <span>{verbose}</span>으로 검색하기
      </h2>
      <label>
        <input
          type="text"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          onKeyDown={(event) => {
            console.log(event.key);
            if (event.key === "Enter" && inputValue !== "") {
              pushDetailPage();
            }
          }}
        />
        <Comp
          onClick={() => {
            pushDetailPage();
          }}
        />
      </label>
    </div>
  );
}

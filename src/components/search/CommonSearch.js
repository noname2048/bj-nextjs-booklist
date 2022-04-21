import styles from "./CommonSearch.module.scss";
import { useState } from "react";
import { Router, useRouter } from "next/router";

export default function CommonSearch({ children, props }) {
  const [inputValue, setInputValue] = useState("");
  const resetInputValue = () => {
    setInputValue("");
  };
  const router = useRouter();
  const pushDetailPage = () => {
    router.push(`${title}search?${title}=${inputValue}`);
  };
  // icon
  const { svg: Comp } = children;

  return (
    <div className={styles.container}>
      <h2>
        <span>{props.title}</span>으로 검색하기
      </h2>
      <label>
        <input
          type="text"
          onKeyDown={(event) => {
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

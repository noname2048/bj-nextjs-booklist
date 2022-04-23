import styles from "./CommonSearch.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CommonSearch(props) {
  const { verbose, AnimeSvg, url, svg: Comp, backgroundColor, Hint } = props;
  const [inputValue, setInputValue] = useState("");
  const resetInputValue = () => {
    setInputValue("");
  };
  const router = useRouter();
  const pushDetailPage = () => {
    router.push(`${url}?q=${inputValue}`);
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <h2>
        <div>{AnimeSvg ? <AnimeSvg className={styles.anime} /> : ""}</div>
        <span>{verbose}</span>으로 검색하기
      </h2>
      <label>
        <input
          type="text"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
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
        {Hint ? <Hint /> : ""}
      </label>
    </div>
  );
}

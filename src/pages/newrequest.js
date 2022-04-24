import styles from "./newrequest.module.scss";
import { useState } from "react";
import { GrAdd } from "react-icons/gr";

export default function Page() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.container}>
      <h2>
        <span>ISBN</span>으로 요청만들기
      </h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label className={styles.label}>
          <input
            className={`${styles.input} ${styles.input}`}
            type="text"
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" && inputValue !== "") {
              }
            }}
          />
          <GrAdd />
        </label>
        <label>
          <span>Update?</span>
          <input type="checkbox" />
        </label>
      </form>
    </div>
  );
}

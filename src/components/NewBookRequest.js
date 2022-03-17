import { useState } from "react";
import styles from "./IndexMain.module.scss";

export default function NewBookRequest() {
  const [userIsbnValue, setUserIsbnValue] = useState("9791165213190");
  return (
    <div className={styles.newrequest}>
      <h1>등록요청하기</h1>
      <div className={styles.form}>
        <span>isbn</span>
        <label>
          <input
            type="text"
            onChange={(e) => {
              setUserIsbnValue(e.target.value);
            }}
          />
          <span>검색</span>
        </label>
      </div>
      <button
        onClick={() => {
          //http://localhost:8000/requests
          fetch("http://localhost:8000/test/echo", {
            method: "POST",
            body: JSON.stringify(userIsbnValue),
          }).then((res) => {
            console.log(res);
          });
        }}
      >
        요청
      </button>
    </div>
  );
}

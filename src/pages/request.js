import { useState } from "react";
import IndexHeader from "../components/IndexHeader";
import styles from "./request.module.scss";

export default function Page() {
  const [userIsbnValue, setUserIsbnValue] = useState("9791165213190");

  return (
    <>
      <IndexHeader />
      <div className={styles.newrequest}>
        <h1>등록요청하기</h1>
        <div className={styles.form}>
          <span>isbn</span>
          <label>
            <input
              type="text"
              defaultValue={userIsbnValue ? userIsbnValue : ""}
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
    </>
  );
}

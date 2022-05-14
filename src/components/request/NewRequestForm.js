import styles from "./NewRequestForm.module.scss";
import { useState } from "react";
import { GrAdd } from "react-icons/gr";

export default function NewRequestForm() {
  const [isbnValue, setIsbnValue] = useState("");

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
              setIsbnValue(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" && inputValue !== "") {
                const postRequest = async () => {
                  const res = await fetch("http://localhost:8000/request", {
                    headers: { "Content-Type": "application/json" },
                    method: "POST",
                    body: JSON.stringify({
                      isbn: isbnValue,
                    }),
                  });
                  return res.status;
                };
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

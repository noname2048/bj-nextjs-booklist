import styles from "./newrequest.module.scss";
import { useState, useRef, useEffect } from "react";
import { GrAdd } from "react-icons/gr";

class BackendNotConnected extends Error {
  constructor(message) {
    super.message(message);
    this.name = "BackendNotConnected";
  }
}

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("no problem");
  const [showHint, setShowHint] = useState(false);
  const timerId = useRef(null);
  const time = useRef(5);
  const maintainFocus = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      time.current = Math.max(time.current - 1, 0);
      // console.log(time.current);
      if (time.current <= 0) setShowHint(true);
      else setShowHint(false);
    }, 1000);
    return () => {
      clearInterval(timerId.current);
    };
  }, []);

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
        <div
          className={`${styles.hint} ${showHint ? "" : styles.hide}`}
          onClick={() => {
            setInputValue(9791196700522);
            maintainFocus.current && maintainFocus.current.focus();
          }}
        >
          {"'9791196700522'로 검색해보기"}
        </div>
        <label className={styles.label}>
          <input
            className={`${styles.input} ${styles.input}`}
            type="text"
            value={inputValue}
            ref={maintainFocus}
            onChange={(event) => {
              time.current = 5;
              setInputValue(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" && inputValue !== "") {
                const postRequest = async () => {
                  try {
                    const res = await fetch("http://localhost:8000/request", {
                      headers: { "Content-Type": "application/json" },
                      method: "POST",
                      body: JSON.stringify({
                        isbn: inputValue,
                      }),
                    });
                    return res.status;
                  } catch (err) {
                    setStatus("backend station!");
                  }
                };
                const status_code = postRequest();
              }
            }}
          />
          <GrAdd className={styles.svg} />
        </label>
        <label>
          <span>Update?</span>
          <input type="checkbox" className={styles.checkbox} />
        </label>
        <label>{status}</label>
      </form>
    </div>
  );
}

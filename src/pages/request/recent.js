import { useState } from "react";
import useSWR from "swr";
// styles
import styles from "./recent.module.scss";
export default function Page() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("http://localhost:8000/requests", fetcher);

  if (error) return <div>server error...</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <div className={styles.container}>
        <h2>최근요청들</h2>
        {recentRequest
          ? recentRequest.map((item, idx) => (
              <div key={idx}>
                <label> isbn: {item?.isbn}</label>
              </div>
            ))
          : null}
      </div>
    </>
  );
}

import { useState, useRef } from "react";
import IndexHeader from "../components/IndexHeader";
import Modal from "../components/Modal";
// styles
import styles from "./request.module.scss";

export default function Page() {
  const [userIsbnValue, setUserIsbnValue] = useState("9791165213190");
  const [openModal, setOpenModal] = useState(false);
  const [modalValue, setModalValue] = useState("");
  const [acceptedRequest, setAcceptedRequest] = useState([]);
  const [checkboxValue, setCheckboxValue] = useState(false);

  return (
    <>
      <Modal
        open={openModal}
        close={() => {
          setOpenModal(false);
        }}
      >
        {modalValue}
      </Modal>
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
          </label>
          <label>
            <span>업데이트</span>
            <input
              type="checkbox"
              name="update"
              onChange={() => setCheckboxValue((prev) => !prev)}
              checked={checkboxValue}
            />
          </label>
        </div>
        <button
          onClick={() => {
            async function dataFetch() {
              const res = await fetch("http://localhost:8000/requests", {
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                  isbn: userIsbnValue,
                  update: checkboxValue,
                }),
              });
              const jsonData = await res.json();
              if (res.status >= 400) {
                const { msg, description } = jsonData;
                console.log(msg);
                setModalValue(description);
                setOpenModal(true);
              } else if (res.status >= 200 && res.status < 300) {
                setAcceptedRequest((prev) => {
                  // 기존 prev에서 isbn이 같은 object를 지우고,
                  // 추가하기
                  let known = prev
                    .filter((item) => item?.isbn !== jsonData.isbn)
                    .slice(0, 5);
                  return [
                    { isbn: jsonData.isbn, time: jsonData.updated_at },
                    ...known,
                  ];
                });
              }
            }
            try {
              dataFetch();
            } catch (err) {
              console.log(err);
            }
          }}
        >
          요청
        </button>
      </div>
      {acceptedRequest
        ? acceptedRequest.map((item, idx) => (
            <div key={idx}>
              <span>isbn: {item?.isbn}</span>
              <br />
              <span>time: {item?.time}</span>
            </div>
          ))
        : null}
    </>
  );
}

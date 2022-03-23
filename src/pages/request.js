import { useState } from "react";
import IndexHeader from "../components/IndexHeader";
import Modal from "../components/Modal";
// styles
import styles from "./request.module.scss";

export default function Page() {
  const [userIsbnValue, setUserIsbnValue] = useState("9791165213190");
  const [openModal, setOpenModal] = useState(false);
  const [modalValue, setModalValue] = useState("");

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
            <span>검색</span>
          </label>
        </div>
        <button
          onClick={() => {
            fetch("http://localhost:8000/requests", {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify({ isbn: userIsbnValue }),
            })
              .then((res) => {
                console.log("등록됨");
                setModalValue("잘되었다.");
                setOpenModal(true);
              })
              .catch((error) => {
                console.log("error");
                setModalValue("서버와의 연결에 문제 발생.");
                setOpenModal(true);
              });
          }}
        >
          요청
        </button>
      </div>
    </>
  );
}

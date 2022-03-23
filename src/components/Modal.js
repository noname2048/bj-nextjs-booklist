//styles
import styles from "./Modal.modules.scss";

export default function Modal(props) {
  const { open, close, header } = props;
  return (
    <div className={open ? "modal open" : "modal"}>
      {props.children}
      <button>닫기</button>
    </div>
  );
}

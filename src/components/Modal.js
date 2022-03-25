import classNames from "classnames/bind";
//styles
import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);
export default function Modal(props) {
  const { open, close, header } = props;
  return (
    <div className={open ? cx("Modal", "openModal") : cx("Modal")}>
      <div>{props.children}</div>
      <button onClick={close}>닫기</button>
    </div>
  );
}

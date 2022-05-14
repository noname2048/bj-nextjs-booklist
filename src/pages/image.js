import Image from "next/image";

const loader = ({ src, height }) => {
  return `https://job-book-image.s3.ap-northeast-2.amazonaws.com/9788966261840.jpg`;
};

export default function Page() {
  return (
    <>
      <div style={{ height: "200px", position: "relative" }}>
        {/* <Image loader={loader} src="1" alt="" layout="fill" /> */}
        <img
          src="https://job-book-image.s3.ap-northeast-2.amazonaws.com/9788966261840.jpg"
          alt="97889666261840.jpg"
        />
      </div>
    </>
  );
}

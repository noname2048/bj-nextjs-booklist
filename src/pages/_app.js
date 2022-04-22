import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import "../../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

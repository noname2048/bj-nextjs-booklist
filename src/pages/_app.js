import "../../styles/global.scss";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import MainHeader from "../components/layout/MainHeader";
import MainNav from "../components/layout/MainNav";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MainHeader />
      <MainNav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

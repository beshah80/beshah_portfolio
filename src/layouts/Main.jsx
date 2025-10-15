import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer/Footer";
import NavBar from "../components/common/navbar/NavBar";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Main;

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <main>
      <Navbar active />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;

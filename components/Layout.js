import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  //document.getElementById().classList.add('dark')
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

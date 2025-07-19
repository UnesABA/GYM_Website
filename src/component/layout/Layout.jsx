import Header from "../header/Header.jsx";
import Routes from "../../routes/Routes.jsx";
import Footer from "../footer/Footer.jsx";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

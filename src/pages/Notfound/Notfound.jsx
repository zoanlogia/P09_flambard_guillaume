import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../layouts/Footer/Footer.jsx";
import "./Notfound.scss";

const Notfound = () => {
  return (
    <>
      <div id="notfound" className="not-found container">
        <Navbar />
        <div className="not-found__container">
            <div className="info">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          </div>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notfound;

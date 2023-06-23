import "./Footer.scss";
import logoFooter from "../../assets/svg/logoFooter.svg";

const Footer = () => {
  return (
    <div id="footer" className="footer container">
      <div className="footer__container">
        <div className="footer__container__logo">
            <img src={logoFooter} alt="logo" />
        </div>
        <p>
        © 2020 Kasa. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

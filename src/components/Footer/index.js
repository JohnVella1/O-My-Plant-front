import "./style.scss";
import logo from "../../assets/img/logo/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-left-part">
        <img
          src={logo}
          className="footer-logo-img footer-left-part-logo"
          alt="logo O'My Plant"
        />
        <h2>O'My Plant</h2>
        <p>
          <br /> Même vos plantes
          <br /> ont leur agenda !
        </p>
      </section>

      <section className="footer-middle-part">
        <h1>Liens utiles</h1>
        <ul>
          <a href="/legal-notice">
            <li>Mentions légales</li>
          </a>
          <a href="/privacy-policy">
            <li>Politiques de confidentialité</li>
          </a>
        </ul>
      </section>

      <section className="footer-right-part">
        <p>
          Nous contacter : <br />
          <br />
          <a href="mailto:oomyplant@gmail.com">oomyplant@gmail.com</a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;

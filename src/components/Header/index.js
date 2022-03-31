import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <section className="header-part-left">
        <div className="header-part-left-contain">
          <h1>O'My Plant</h1>
          <p style={{ fontWeight: 600, fontSize: "1.5rem", margin: 0 }}>
            Même vos plantes
            <br /> ont leur agenda !
          </p>
          <br />
          <p style={{}}>
            Le meilleur compagnon
            <br />
            pour l'entretien de vos plantes
          </p>
        </div>
      </section>
      <section className="header-part-right"></section>
    </header>
  );
};

export default Header;

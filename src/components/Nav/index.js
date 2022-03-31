import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo/logo.svg";

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import AccountMenu from "../AccountMenu";
import { useEffect, useState } from "react";
import { logout } from "../../actions/user";

const Nav = () => {
  const getActiveClassname = ({ isActive }) =>
    isActive ? "nav-menu-link nav-menu-link--active" : "nav-menu-link";
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflowY = "hidden";
    } else if (!menuIsOpen) {
      document.body.style.overflowY = "auto";
    }
    const handleScreen = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleScreen);
    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, [menuIsOpen]);
  const handleLogout = () => {
    setMenuIsOpen(false);
    dispatch(logout());
  };
  return (
    <nav className="nav">
      <section className="nav-logo">
        <Link
          className="nav-logo-container"
          to="/"
          style={{ textDecoration: "none" }}
        >
          <img src={logo} className="nav-logo-img" alt="logo O'My Plant" />
          <h1 className="nav-title">O'My Plant</h1>
        </Link>
      </section>
      {screenWidth <= 900 && (
        <div
          className={menuIsOpen ? "burger-menu close" : "burger-menu"}
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <span></span>
        </div>
      )}
      {(menuIsOpen || screenWidth > 900) && (
        <section className="nav-menu">
          {user.logged && screenWidth <= 900 && (
            <div className="greetingMobile">
              <p> Bonjour {user.pseudo}</p>
              <img src={user.profilepicture} />
            </div>
          )}

          {user.logged && screenWidth <= 900 && (
            <NavLink
              onClick={() => setMenuIsOpen(false)}
              className={getActiveClassname}
              to="/profile"
            >
              Mon profil
            </NavLink>
          )}

          <NavLink
            onClick={() => setMenuIsOpen(false)}
            className={getActiveClassname}
            to="/"
          >
            Accueil
          </NavLink>
          <NavLink
            onClick={() => setMenuIsOpen(false)}
            className={getActiveClassname}
            to="/about"
          >
            A propos
          </NavLink>
          {user.role === "member" && (
            <>
              <NavLink
                onClick={() => setMenuIsOpen(false)}
                className={getActiveClassname}
                to="/my-garden"
              >
                Mon jardin
              </NavLink>
              <NavLink
                onClick={() => setMenuIsOpen(false)}
                className={getActiveClassname}
                to="/add-plant"
              >
                Ajouter une plante
              </NavLink>
              {user.logged && screenWidth <= 900 && (
                <NavLink
                  onClick={handleLogout}
                  className={getActiveClassname}
                  to="/"
                >
                  Déconnexion
                </NavLink>
              )}
            </>
          )}
          {!user.logged && (
            <>
              <Link
                onClick={() => setMenuIsOpen(false)}
                to="/login"
                className="no-underline"
              >
                <Button
                  className="nav-menu-link nav-menu-link-btn nav-menu-link-login"
                  buttonContent="Connexion"
                />
              </Link>
              <Link
                onClick={() => setMenuIsOpen(false)}
                to="/subscribe"
                className="no-underline"
              >
                <Button
                  className="nav-menu-link nav-menu-link-btn nav-menu-link-signup"
                  buttonContent="Inscription"
                />
              </Link>
            </>
          )}
          {user.logged && screenWidth > 900 && (
            <div className="nav-menu-loggedMessage">
              <span className="nav-menu-loggedMessage-pseudo">
                Bonjour {user.pseudo}
              </span>{" "}
              <AccountMenu onClick={() => setMenuIsOpen(false)} />
            </div>
          )}
        </section>
      )}
    </nav>
  );
};

export default Nav;

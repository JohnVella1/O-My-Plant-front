import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../Nav";
import Footer from "../Footer";
import About from "../About";
import Home from "../Home";
import Login from "../Login";
import Subscribe from "../Subscribe";
import Profile from "../Profile";
import MyGarden from "../MyGarden";
import Database from "../Database";
import Page404 from "../Page404";
import LegalNotice from "../LegalNotice";
import "./style.scss";
import { fetchUser, fetchGardenId } from "../../actions/user";
import PrivacyPolicy from "../PrivacyPolicy";

const App = () => {
  const navigate = useNavigate();
  const userDeleted = useSelector((state) => state.user.profile_deleted);
  const userLogged = useSelector((state) => state.user.logged);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchGardenId());
  }, [userLogged]);

  useEffect(() => {
    if (userDeleted) {
      navigate("/");
    }
  }, [userDeleted]);

  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return (
    <>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login title="Se connecter" />} />
          <Route path="/subscribe" element={<Subscribe title="S'inscrire" />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="*" element={<Page404 />} />
          {userLogged && (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/my-garden" element={<MyGarden />} />
              <Route path="/add-plant" element={<Database />} />
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;

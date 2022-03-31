import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Field from "../Field";
import { saveUser } from "../../actions/user";

import "./style.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://omyplant.herokuapp.com/login", {
        mail: email.toLowerCase(),
        password: password,
      })
      .then((res) => {
        // stockage du token dans le localStorage
        localStorage.setItem("token", res.headers.authorization);
        // stockage des infos de l'api dans le state
        dispatch(saveUser(res.data));
        navigate("/");
      })
      .catch((err) => {
        console.log("erreur", err);
        setInvalidCredentials(true);
      });
  };

  return (
    <section className="login-form">
      <form
        autoComplete="off"
        className="login-form-element"
        onSubmit={handleSubmit}
      >
        <Field
          name="mail"
          type="email"
          placeholder="E-mail"
          onChange={(value) => setEmail(value)}
          value={email}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={(value) => setPassword(value)}
          value={password}
        />
        <button type="submit" className="login-form-button">
          Valider
        </button>
        {invalidCredentials ? (
          <div className="login-form-error-message">
            Les identifiants sont incorrects. Veuillez réessayer.
          </div>
        ) : null}
      </form>
    </section>
  );
};

export default LoginForm;

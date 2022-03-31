import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Field from "../Field";

import "./style.scss";

const SubscribeForm = () => {
  const navigate = useNavigate();
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);
  const [clickedOnSubmitButton, setClickedOnSubmitButton] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setClickedOnSubmitButton(true);

    if (
      pseudo === "" ||
      email === "" ||
      password === "" ||
      passwordConfirmation === ""
    )
      return;

    if (password !== passwordConfirmation) return;

    axios
      .post("https://omyplant.herokuapp.com/subscribe", {
        pseudo: pseudo,
        mail: email,
        password: password,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log("erreur: ", err.response.data);
        setUserAlreadyExists(true);
      });
  };

  return (
    <section className="subscribe-form">
      <form
        autoComplete="off"
        className="subscribe-form-element"
        onSubmit={handleSubmit}
      >
        <Field
          name="pseudo"
          type="text"
          placeholder="Pseudo"
          onChange={(value) => setPseudo(value)}
          value={pseudo}
        />
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
        <Field
          name="passwordConfirmation"
          type="password"
          placeholder="Confirmation du mot de passe"
          onChange={(value) => setPasswordConfirmation(value)}
          value={passwordConfirmation}
        />
        <button type="submit" className="subscribe-form-button">
          Valider
        </button>
        {userAlreadyExists ? (
          <div className="subscribe-form-error-message">
            Un utilisateur existe déjà avec cet email. Veuillez recommencer.
          </div>
        ) : null}
        {clickedOnSubmitButton &&
        (pseudo === "" ||
          email === "" ||
          password === "" ||
          passwordConfirmation === "") ? (
          <div className="subscribe-form-error-message">
            Un des champs est vide. Veuillez remplir tous les champs.
          </div>
        ) : null}
        {clickedOnSubmitButton && password !== passwordConfirmation ? (
          <div className="subscribe-form-error-message">
            La confirmation du mot de passe est incorrecte. Veuillez réessayer.
          </div>
        ) : null}
      </form>
    </section>
  );
};

export default SubscribeForm;

import Proptypes from "prop-types";
import SubscribeForm from "../SubscribeForm";
import "./style.scss";

const Subscribe = ({ title }) => {
  return (
    <main className="login-container">
      <h1 className="login-title">{title}</h1>
      <SubscribeForm />
    </main>
  );
};

export default Subscribe;

Subscribe.propTypes = {
  title: Proptypes.string.isRequired,
};

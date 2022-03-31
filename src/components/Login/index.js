import PropTypes from "prop-types";
import LoginForm from "../LoginForm";
import "./style.scss";

const Login = ({ title }) => {
  return (
    <main className="login-container">
      <h1 className="login-title">{title}</h1>
      <LoginForm />
    </main>
  );
};

Login.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Login;

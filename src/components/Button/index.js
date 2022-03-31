import "./style.scss";

const Button = ({ className, buttonContent }) => {
  return <button className={className}>{buttonContent}</button>;
};

export default Button;

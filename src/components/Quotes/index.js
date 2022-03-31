import Proptypes from "prop-types";
import "./style.scss";

const Quotes = ({ page, quote, author }) => {
  return (
    <section className={page}>
      <p className="contain">{quote}</p>
      <p className="author">{author}</p>
    </section>
  );
};

Quotes.propTypes = {
  page: Proptypes.string.isRequired,
  quote: Proptypes.element.isRequired,
  author: Proptypes.string.isRequired,
};

export default Quotes;

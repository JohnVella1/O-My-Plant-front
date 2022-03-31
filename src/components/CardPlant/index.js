import PropTypes from "prop-types";
import "./style.scss";

const CardPlant = ({
  title,
  contentButton,
  img,
  onCardClick,
  onAddClick,
  value,
  cursorPointerNone,
}) => (
  <article className={`card ${cursorPointerNone}`} onClick={onCardClick}>
    <section className="card-image">
      <img src={img} alt={title} />
    </section>
    <div className="card-bottom-part">
      <div className="card-desc">
        <p className="card-desc-title">{title}</p>
      </div>
      {contentButton && (
        <div className="card-button">
          <button onClick={onAddClick} value={value}>
            {contentButton}
          </button>
        </div>
      )}
    </div>
  </article>
);

CardPlant.propTypes = {
  title: PropTypes.string,
  contentButton: PropTypes.string,
  img: PropTypes.string,
  onCardClick: PropTypes.func,
  onAddClick: PropTypes.func,
  value: PropTypes.number,
  cursorPointerNone: PropTypes.string,
};

export default CardPlant;

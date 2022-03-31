import PropTypes from "prop-types";

import "./style.scss";

const Field = ({
  value,
  type,
  minNumber,
  name,
  placeholder,
  onChange,
  disabled,
  className,
  required,
}) => {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value, name)}
        type={type}
        min={minNumber}
        className={className ? `${className} field-input` : "field-input"}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        required={required ? required : false}
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minNumber: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Field;

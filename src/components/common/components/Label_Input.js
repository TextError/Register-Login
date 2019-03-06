import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const LabelInput = ({
  text,
  name,
  icon,
  placeholder,
  value,
  error,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{text}</label>
      <div className='input-group'>
        <div className="input-group-prepend">
          <div className="input-group-text"><i className={icon}></i></div>
        </div>
        <input
          type={type}
          className={classnames('form-control form-control-lg', {'is-invalid' : error})}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    </div>
  );
};

LabelInput.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.string
};

LabelInput.defaultProps = {
  type: 'text'
};

export default LabelInput;
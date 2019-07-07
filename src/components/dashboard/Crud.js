import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Crud = ({
  type,
  name,
  edit,
  value,
  error,
  onChange,
}) => {
  return (
    <div className='dashboard-user'>
      <div className='form-group'>
        <div className='input-group'>
          <input
            type={type}
            className={classnames('form-control form-control-lg', {'is-invalid' : error})}
            name={name}
            value={value}
            onChange={onChange}
            disabled={edit ? false : true}
          />
          <span className='dashbord-edit m-auto pl-2'><i className="fas fa-pen"></i></span>
          {error && <div className='invalid-feedback'>{error}</div>}
        </div>
      </div>
    </div>
  );
};

Crud.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Crud.defaultProps = {
  type: 'text'
};

export default Crud;
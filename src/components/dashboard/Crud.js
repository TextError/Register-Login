import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Crud extends Component {

  onDelete = id => () => {
    this.props.onDelete(id)
  }
  
  render() {
    const { type, name, value, edit, onChange, onEdit, onDelete, error, id } = this.props;
    return (
      <div className='row no-gutters'>
        <div className='col-9'>
          <div className='dashboard-user'>
            <div className='form-group mb-0'>
              <div className='input-group'>
                <input
                  type={type}
                  className={classnames('form-control form-control-lg', {'is-invalid' : error})}
                  name={name}
                  value={value}
                  onChange={onChange}
                  disabled={edit ? false : true}
                />
                {error && <div className='invalid-feedback'>{error}</div>}
              </div>
            </div>
          </div>
        </div>
        <div className='col-3 m-auto d-flex'>
          <span 
            className='m-auto dashbord-edit'
            onClick={onEdit}
            >
              <i className="fas fa-pen"></i>
          </span> 
          <span 
            className='dashboard-delete float-right'
            onClick={this.onDelete('test')}
            >
            <button className='btn btn-primary'><i className='far fa-times-circle'></i></button>
          </span>
        </div>
      </div>
    );
  };
};
  
  Crud.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    edit: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    error: PropTypes.string,
  };
  
  Crud.defaultProps = {
    type: 'text'
  };
  
  export default Crud;

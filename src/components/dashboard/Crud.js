import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Crud extends Component {
  constructor() {
    super();
    this.state = {
      edit: false
    }
  }

  onEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  onDelete = id => () => {
    this.props.onDelete(id)
  }
  
  render() {
    const { type, name, value, onChange, error, id } = this.props;
    const { edit } = this.state;
    return (
      <div className='row no-gutters mb-3'>
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
            onClick={this.onEdit}
            >
              <i className={!edit ? 'fas fa-pen' : 'fas fa-check'}></i>
          </span> 
          <span 
            className='dashboard-delete float-right'
            onClick={this.onDelete(id)}
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
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    error: PropTypes.string,
  };
  
  Crud.defaultProps = {
    type: 'text'
  };
  
  export default Crud;

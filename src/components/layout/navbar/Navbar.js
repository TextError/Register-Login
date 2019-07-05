import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Components
import Logo from '../Logo';

// Css
import '../../../css/navbar.css'

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      isAuthenticated: false,
    }
  }

  onClick = () => { this.setState({ show: !this.state.show }); };

  render() {

    const { show, isAuthenticated } = this.state;

    // isAuthenticated === true
    const authLinks = (
      <ul className="navbar-nav ml-auto mr-5">
        <li className="nav-item mr-3 mt-3">
          <Link 
            to='/dashboard'
            className='nav-link'
            onClick={this.onClick}
            ><span>Dashboard</span></Link>
        </li>
        <li className="nav-item mr-3 mt-3">
          <Link 
            to='/admin'
            className='nav-link'
            onClick={this.onClick}
            ><span>Admin</span></Link>
        </li>
        
        <li className="nav-item mr-3 mt-3">
          <span
            className='nav-link'
            onClick={this.onSignOut}
            ><span>Sign Out</span></span>
        </li>
      </ul>
    );

    // isAuthenticated === false
    const guestLinks = (
      <ul className="navbar-nav">
        <li className="nav-item mr-3 mt-3">
          <Link 
            to='/register' 
            className='nav-link'
            onClick={this.onClick}
          ><span>Register</span></Link>
        </li>
        <li className="nav-item mr-3 mt-3">
          <Link 
            to='/sign-in' 
            className='nav-link'
            onClick={this.onClick}
          ><span>Sign in</span></Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light navbar-height">
        <Logo />
        <button
          className="navbar-toggler" 
          type="button"
          onClick={this.onClick}  
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={classnames('collapse navbar-collapse', { 'show' : show })}>
          <ul className='navbar-nav ml-auto'>
            <li className="nav-item mr-3 mt-3">
            <Link 
              to='/' 
              className='nav-link'
              onClick={this.onClick}
              >
                <span>Home</span>
              </Link>
            </li>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </nav>
    )
  }
};

Navbar.propTypes = {

};

const mapStateToProps = state => ({

});


export default connect(mapStateToProps, {})(Navbar)
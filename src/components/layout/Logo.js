import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className='logo'>
      <Link to='/'><img src={logo} alt='logo' /></Link>
    </div>
  )
}

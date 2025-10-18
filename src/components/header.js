import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../data/logo.jpg';

function Header({currentUser, onLogout}) {
  return (
    <header className="app-header">
      <img src={logo} alt="Claude Mine Logo" className="logo" />
      <div className="logo">Claude Mine</div>
      <nav>
        <ul>
          <li><Link to="/" className="button-link-alt">Početna</Link></li>
          <li><Link to="/menu" className="button-link-alt">Meni</Link></li>
          <li><Link to="/reservations" className="button-link-alt">Rezervacije</Link></li>
          <li><Link to="/orders" className="button-link-alt">Narudžbine</Link></li>
          <li><Link to="/profile" className="button-link-alt">Profil</Link></li>
          <li><Link to="/login" className="button-link-alt">Prijava/Odjava</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
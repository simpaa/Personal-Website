import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <h1>Simon Andersson</h1>

        <nav className="main-menu">
          <ul>
            <li><NavLink exact to="/" activeClassName="menu-item-active">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="menu-item-active">About</NavLink></li>
            <li><NavLink to="/portfolio" activeClassName="menu-item-active">Portfolio</NavLink></li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;

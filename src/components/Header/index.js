import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="main-header">

        <div className="profile-picture"></div>

        <h1>Simon Andersson</h1>

        <nav className="main-menu">
          <ul>
            <li><NavLink exact to="/" activeClassName="menu-item-active">Portfolio</NavLink></li>
            <li><NavLink to="/about" activeClassName="menu-item-active">About</NavLink></li>
            <li><NavLink to="/apps" activeClassName="menu-item-active">Apps</NavLink></li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;

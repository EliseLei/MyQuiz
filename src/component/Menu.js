import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.svg';


class Menu extends Component {
  render() {
    return (
      <div className ="menu_connecte">
        <nav className ="Menu">
          <ul className ="Rubrique">
            <li><Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link></li>
            <li><h2><Link to='/'>REACT QUIZ</Link></h2></li>
            <li><Link to='/MonProfil'><i class="fa fa-user"></i> Profil</Link></li>
            <li><Link to='/'><i class="fa fa-chevron-circle-right"></i>Déconnexion</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;

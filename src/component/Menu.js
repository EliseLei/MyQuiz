import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <div>
      <h1>je suis menu</h1>
      <nav>
        <ul>
          <li>REACT QUIZ</li>
          {/* <li><Link to='/Connexion'>Connexion</Link></li>
          <li><Link to='/test2'>Inscription</Link></li>*/}
          <li><Link to='/MonProfil'>Profil</Link></li>
          <li><Link to='/'>Déconnexion</Link></li>
        </ul>
      </nav>
      </div>
    );
  }
}

export default Menu;

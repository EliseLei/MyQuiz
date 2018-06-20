import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.svg';


class Menu extends Component {
  render() {
    const username = this.props.username
    console.log(username);
    return (
      <div className ="menu_connecte">
        <nav className ="Menu">
          <ul className ="Rubrique">
            <li><Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link></li>
            <li><h2><Link to='/'>REACT QUIZ</Link></h2></li>
            <li><Link to= {{
              pathname: '/MonProfil',
              state: {username: username}
            }}
            
            ><i className="fa fa-user"></i> Profil</Link></li>
            <li><Link to='/'><i className="fa fa-chevron-circle-right"></i>Déconnexion</Link></li>
            <li className="right">BIENVENUE {username}</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;

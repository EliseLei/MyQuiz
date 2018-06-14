import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Resultats from './Resultats'

class MonProfil extends Component {
  
  render() {

    return (
      <div className="MonProfil">
        <Menu/>
        <Link to='/Mode_jeu'><i class="fa fa-chevron-left"></i><span className="displaymobile">Revenir au mode de jeu</span></Link>
        <h2><i className ="fa fa-user"></i>Mon profil</h2>
        <p><i class="fa fa-envelope"></i> Email : mettre le mail du user</p>
        <p><i className ="fa fa-user"></i>Pseudo : mettre le pseudo du user</p>
        <Resultats/>
      </div>
    );
  }
}

export default MonProfil;

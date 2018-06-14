import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Menu from './Menu'

class MonProfil extends Component {
  
  render() {

    return (
      <div className="MonProfil">
        <Menu/>
        <Link to='/Mode_jeu'><i class="fa fa-chevron-left"></i><span className="displaymobile">Revenir au mode de jeu</span></Link>
        <h2>Hello je suisprofil</h2>
      </div>
    );
  }
}

export default MonProfil;

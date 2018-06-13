import React, { Component } from 'react';
import Menu from './Menu'
import Invitation from './Invitation'
import { Link } from 'react-router-dom'

class Theme extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
  const multijoueur = this.props.multijoueur;
    return (
      <div className="Theme">
        <Menu/>
        <Link to='/Mode_jeu'>Revenir au mode de jeu</Link>
        <h1>Hello je suis dans le theme</h1>
        <div className = "touslesthemes">
        <div class="themes">
          <div class="theme">
            <h2><i class="fa fa-book"></i> Histoire</h2>
            <span>Libellé1</span>
          </div>
          <div class="theme">
            <h2><i class="fa fa-globe"></i>Géographie</h2>
            <span>Libellé1</span>
          </div>
          <div class="theme">
            <h2><i class="fa fa-film"></i>Film</h2>
            <span>Libellé1</span>
          </div>
          <div class="theme">
            <h2><i class="fa fa-pencil-alt"></i>Artistes</h2>
            <span>Libellé1</span>
          </div>
          <div class="theme">
            <h2><i class="fa fa-glasses"></i>Culture G</h2>
            <span>Libellé1</span>
          </div>
          <div class="theme">
            <h2><i class="fa fa-calculator"></i>Mathématique</h2>
            <span>Libellé1</span>
          </div>
          <p><i class="fa fa-dice-two"></i><u>Jouer en mode aléatoire</u></p>
        </div>
      </div>
      
       {multijoueur && <Invitation/>} 
      
      </div>
    );
  }
}

export default Theme;

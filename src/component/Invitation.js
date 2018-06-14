import React, { Component } from 'react';
import Joueur from './Joueur'

class Invitation extends Component {
  constructor(props){
    super(props);
    this.setValue = this.setValue.bind(this),
  	this.state = {
      multi : "multi",
      lettre: "", 
      joueuralreadyadd:[], 
    }	
  }
  
  setValue() {
    var joueuralreadyadd = this.state.joueuralreadyadd;
  }
  
  render() {
    const joueuralreadyadd = this.state.joueuralreadyadd;
    return (
      <div className = "inscription">
      <h2>Inviter vos amis</h2>
        <input onClick={this.setUpdate} className="ajouterjoueur" type="text" placeholder="Ajouter le pseudo d'un joueur"></input>
        <button onClick={this.setValue} className="btn_commencer">Envoyer</button> ou
        <input className="ajouterjoueur" type="text" placeholder="Inviter par mail"></input>
        <button className="btn_commencer">Ajouter</button>
        <Joueur joueuralreadyadd={this.joueursalreadyadd}/>
      </div>
    );
  }
}

export default Invitation;

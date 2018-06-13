import React, { Component } from 'react';
import Menu from './Menu'
import { Link } from 'react-router-dom'

class Connexion extends Component {
  constructor(props){
    super(props);
  }
  
  seconnecter = () => {
    var email = document.getElementById("email").value;
    var motdepasse = document.getElementById("mdp").value;
    console.log(email);
    {/** connecter avec l'api puis faire un post **/}
  //  this.props.changerIsLoggedIn();
    this.props.history.push("/Mode_jeu");
  }

  
  render() {
    /*const isLoggedIn = this.state.isLoggedIn;
      if (isLoggedIn === true) {
          return ( <Redirect to="/Connexion"/>);
      }  */
      
    return (
      <div className="Connexion">
        <h1>REACT QUIZ </h1>
        <p class="sous-titre">  Découvrez des questions sur </p>
          <div class="formulaire">
            <div class="ensemble_champ">
              <span>Votre Email</span> 
              <input type="text" class="champs" id="email" placeholder="Email"/>
            </div>
            <div class="ensemble_champ">
              <span>Votre mot de passe</span> 
              <input type="password" class="champs" id="mdp" placeholder="Mot de passe"/>
            </div>
            <div class="ensemble_champ">
              <input type="button" onClick={this.seconnecter} class="champs btn_commencer" value="COMMENCER"/>
            </div>
        </div>
        <Link to='/Inscription'><u>Inscrivez-vous ! </u></Link>
      </div>
          
    );
  }
}

export default Connexion;

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Inscription extends Component {
  
  seconnecter = () => {
    var email = document.getElementById("email").value;
    var Pseudo = document.getElementById("Pseudo").value;
    var motdepasse = document.getElementById("mdp").value;
    var confirmationmdp = document.getElementById("confirmationmdp").value;
    console.log(email);
    {/** connecter avec l'api puis faire un post **/}
  //  this.props.changerIsLoggedIn();
    this.props.history.push("/Mode_jeu");
  }
  

  render() {
    /*const isLoggedIn = this.state.isLoggedIn;
      if (isLoggedIn === true) {
          return ( <Redirect to="/Inscription"/>);
      }  */
      
    return (
      <div className = "inscription">
        <h1>REACT QUIZ </h1>
        <p className ="sous-titre">  Découvrez des questions sur</p>
        <div className ="formulaire">
          <div className ="ensemble_champ">
            <span>Votre Pseudo*</span> 
            <input type="text" className ="champs" id="Pseudo" placeholder="Pseudo"/>
          </div>
          <div className ="ensemble_champ">
            <span>Votre Email*</span> 
            <input type="text" className ="champs" id="email" placeholder="Email"/>
          </div>
          <div className ="ensemble_champ">
            <span>Votre mot de passe* <span className ="mini">Minimum 8 caractères</span></span> 
            <input type="password" className ="champs" id="mdp" placeholder="Mot de passe"/>
          </div>
          <div className ="ensemble_champ">
            <span>Confirmation mot de passe*</span> 
            <input type="password" className ="champs" id="confirmationmdp" placeholder="Confirmation Mot de passe"/>
          </div>
          <div className ="ensemble_champ">
            <input type="button" onClick={this.seconnecter} className ="champs btn_commencer" value="COMMENCER"/>
          </div>
          <Link to='/'><u>Déjà un compte ? Connectez-vous </u></Link>
        </div>
      
      </div>
          
    );
  }
}

export default Inscription;

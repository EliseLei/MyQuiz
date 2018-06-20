import React, {Component} from 'react'
import Joueur from './Joueur.js';

//console.log(input.val);
class Email extends Component {
  constructor(props) {
  	super(props)
    this.setValue = this.setValue.bind(this),
    this.setUpdate = this.setUpdate.bind(this)
  	this.state = {
      lettre: "", 
      statut: "", 
      erreur: "",
      lettersalreadyplayed:[], 
      letters: this.props.word,
    }	
  } 
  
  setValue() {
    var writelettre = this.state.writelettre.toLowerCase();
    var statut = false;
    var erreur = false;
    var that = this;
    var lettersalreadyplayed = this.state.lettersalreadyplayed;
    var alreadyplayed = false;

    lettersalreadyplayed.map(function(lettre) {
      if (writelettre === lettre.toLowerCase()) {
        alreadyplayed = true;
        erreur = true; 
        document.getElementById('lettre').value="";
      }
      return true;
    })
    
    if(erreur === true) {
      erreur = "L'invitation a déjà été envoyé";
      this.setState({erreur:erreur,});
    }
    else {
      erreur = "L'invitation a bien été envoyé :)";
      this.setState({erreur:erreur,});
    }

      
    if(alreadyplayed === false) {
    
      if(lettersalreadyplayed.push(writelettre)) {
        document.getElementById('Email').value="";
        console.log("suppr valeur");
      }
      
      
        statut = "Oui, la lettre se trouve dans le mot";
        console.log("bon");
        this.setState({statut:statut,});

    }
}

  setUpdate(e) {
      if(/[a-zA-Z]/.test(e.target.value)) {
        this.setState({writelettre:e.target.value});
      }
  }
  
  
  render() {
    const statut = this.state.statut;
    const erreur = this.state.erreur;
    const lettersalreadyplayed = this.state.lettersalreadyplayed;
    
    return (
      <div>
        <input className="champs" type="text" id="Email" onChange={this.setUpdate} placeholder="Inviter un joueur par mail"/>
        <input type="button" className="btn_ajouter" value="ENVOYER" onClick={this.setValue}/>
       <Joueur lettersalreadyplayed={lettersalreadyplayed}/>
       <p><u>{erreur}</u></p>
      </div>
    )
  }
}
export default Email

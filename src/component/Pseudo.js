import React, {Component} from 'react'
import Joueur from './Joueur.js';

//console.log(input.val);
class Pseudo extends Component {
  constructor(props) {
  	super(props)
    this.setValue = this.setValue.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
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
    var erreur = false;
    // var that = this;
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
      erreur = "Ce joueur a déjà été ajouté";
      this.setState({erreur:erreur,});
    }
    else {
      erreur = "";
      this.setState({erreur:erreur,});
    }

      
    if(alreadyplayed === false) {
    
      if(lettersalreadyplayed.push(writelettre)) {
        document.getElementById('lettre').value="";
        console.log("suppr valeur");
      }
  //  lettersalreadyplayed.push(writelettre);

    //var writelettre = document.getElementById("valeur").value="";
    
        
        
    /*this.state.letters.map(function(lettre) {
      if(writelettre === lettre) {
        statut = true;
        that.setState({statut:statut, lettre:writelettre, lettersalreadyplayed:lettersalreadyplayed,});
      } 
        return true;
    })  */
      

    }
}

  setUpdate(e) {
      if(/[a-zA-Z]/.test(e.target.value)) {
        this.setState({writelettre:e.target.value});
      }
  }
  
  
  render() {
    // const statut = this.state.statut;
    const erreur = this.state.erreur;
    const lettersalreadyplayed = this.state.lettersalreadyplayed;
    
    return (
      <div>
        <input className="champs" type="text" id="lettre" onChange={this.setUpdate} placeholder="Entrer le pseudo d'un joueur"/>
        <input type="button" className="btn_ajouter" value="AJOUTER" onClick={this.setValue}/>
        <Joueur lettersalreadyplayed={lettersalreadyplayed}/>
        <p><u>{erreur}</u></p>
      </div>
    )
  }
}
export default Pseudo

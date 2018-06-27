import React, {Component} from 'react'
import Joueur from './Joueur.js';

//console.log(input.val);
class Email extends Component {
  constructor(props) {
  	super(props)
    this.setValue = this.setValue.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  	this.state = {
      lettre: "", 
      statut: "", 
      erreur: "",
      writelettre: "",
      lettersalreadyplayed:[], 
      letters: this.props.word,
    }	
  } 
  
  setValue() {

    
    var writelettre = this.state.writelettre.toLowerCase();
    var statut = false;
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
    
    
    if(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(document.getElementById('Email').value)) {
      if(erreur === true) {
        erreur = "L'invitation a déjà été envoyé";
        this.setState({erreur:erreur,});
      }
      else {
        erreur = "L'invitation a bien été envoyé :)";
        this.setState({erreur:erreur,});
      }
    }
    
    else {
      erreur = "l'email n'est pas conforme";
      this.setState({erreur:erreur,});
      console.log("pas conforme");
    }

      
    if(alreadyplayed === false) {
    
      if(lettersalreadyplayed.push(writelettre)) {
        //)
        document.getElementById('Email').value="";
        console.log("suppr valeur");
      }
      
        statut = "Oui, la lettre se trouve dans le mot";
        console.log("bon");
        this.setState({statut:statut,});

    }

}

  setUpdate(e) {
    // var erreur = false;
      if(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(e.target.value)) {
        this.setState({writelettre:e.target.value});
      }
    
  }
  
  
  render() {
    // const statut = this.state.statut;
    const erreur = this.state.erreur;
    const lettersalreadyplayed = this.state.lettersalreadyplayed;
    
    return (
      <div>
        <input className="champs" type="text" id="Email" onChange={this.setUpdate} placeholder="Inviter un joueur par mail"/>
        <input type="button" className="btn_ajouter" value="ENVOYER" onClick={this.setValue}/>
       <Joueur lettersalreadyplayed={lettersalreadyplayed}/>
       <p><u>{erreur}</u></p>
  {/*   <p> <a href="mailto:eliseleininger@gmail.com
?subject=Notre affaire
&cc=partenaire@antonio.net
&bcc=avocat@antonio.net
&body=Bonjour">  HFjqhfjhfjkeh</a> </p>*/} 
      </div>
    )
  }
}
export default Email

import React, {Component} from 'react'
import Joueur from './Joueur.js';
//import Email from './Email.js';
import { Email, Item, Span, A, renderEmail } from 'react-html-email'
import courier from 'courier-js';

//console.log(input.val);
class Mail extends Component {
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
      const emailHTML = renderEmail(
        <Email title="Hello World!">
          <Item align="center">
            <Span fontSize={20}>
              This is an example email made with:
              <A href="mailto:eliseleininger@gmail.com">react-html-email</A>.
            </Span>
          </Item>
        </Email>
      
      )
        console.log(emailHTML);
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
        <a href="mailto:eliseleininger@gmail.com"><input type="button" className="btn_ajouter" value="ENVOYER" onClick={this.setValue}/></a>
        <a href="mailto:san@antonio.net
?subject=Notre affaire
&cc=partenaire@antonio.net
&bcc=avocat@antonio.net
&body=Bonjour"> HELLO </a>
       <Joueur lettersalreadyplayed={lettersalreadyplayed}/>
       <p><u>{erreur}</u></p>
      </div>
    )
  }
}
export default Mail

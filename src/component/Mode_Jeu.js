import React, { Component } from 'react';
import Menu from './Menu'
import { Link } from 'react-router-dom'

class Mode_Jeu extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      multijoueur : true
    };
  }
  
  giveMeTheme() {
    this.props.history.push("/Theme");
    console.log("hello");
  }
  
  render() {

    return (
      <div className="Mode_jeu">
        <Menu/>
        <h1>Hello je suis Mode_de_jeu</h1>
      
        <p class="sous-titre">Choississez un mode de jeu</p>
         <div class="modes">
           <Link to='/Theme' class="mode">
             <h2><i class="fa fa-user"></i> MODE SOLO</h2>
          </Link>
          <Link to='/Theme' params={{ multijoueur: true }} class="mode">
             <h2><i class="fa fa-users"></i>MODE MULTIJOUEUR</h2>
            </Link>
         </div>
        
      </div>
    );
  }
}

export default Mode_Jeu;

import React, { Component } from 'react';
import Menu from './Menu'
import { Link } from 'react-router-dom'

 class Mode_Jeu extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      multi : "lala"
    };
  }
  
  render() {

    return (
      <div className ="Mode_jeu">
        <Menu/>
        <h2>Choississez un mode de jeu</h2>
    
         <div className ="modes">
           <Link to='/Theme' className ="mode">
             <h2><i className ="fa fa-user"></i> MODE SOLO</h2>
          </Link>
          <Link to='/Thememulti' className ="mode">
             <h2><i className ="fa fa-users"></i>MODE MULTIJOUEUR</h2>
            </Link>
         </div>
        
      </div>
    );
  }
}

export default Mode_Jeu;

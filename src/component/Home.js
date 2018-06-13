import React, { Component } from 'react';
import Menu from './Menu'
import Connexion from './Connexion'
import { Route, Redirect } from 'react-router'

class Home extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      isLoggedIn: false, 
    };
  }
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
      if (isLoggedIn === true) {
          return ( <Redirect to="/Connexion"/>);
      } 
    
    return (
      <div className="Home">
        <h1>Hello je suis home</h1>
        <Menu/>
        
      </div>
    );
  }
}

export default Home;

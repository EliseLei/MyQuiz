import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Menu from './Menu'

class MonProfil extends Component {
  constructor(props){
    super(props);
  }
  
  render() {

    return (
      <div className="MonProfil">
        <h1>Hello je suisprofil</h1>
        <Menu/>
      </div>
    );
  }
}

export default MonProfil;

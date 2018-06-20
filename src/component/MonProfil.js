import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Resultats from './Resultats'

class MonProfil extends Component {
  
  render() {
    const username = this.props.location.state.username
    return (
      <div className="MonProfil">
        <Menu username={username}/>
        <Link to={{
          pathname: '/Mode_jeu',
          state: {username: username}
        }}
        ><i className="fa fa-chevron-left"></i><span className="displaymobile">Revenir au mode de jeu</span></Link>
        <h2><i className ="fa fa-user"></i>Mon profil</h2>
    {/*  <p><i class="fa fa-envelope"></i> Email : </p> */}
        <p><b>Pseudo</b> : {username}</p>

        <Resultats/>
      </div>
    );
  }
}

export default MonProfil;

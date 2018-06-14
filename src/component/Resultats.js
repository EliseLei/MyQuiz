import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Resultats extends Component {
  
  render() {

    return (
      <div className="Resultats">
        <h2>Résultats</h2>
        <p> boucle for pour chaque thème afficher les scores </p>
      </div>
    );
  }
}

export default Resultats;

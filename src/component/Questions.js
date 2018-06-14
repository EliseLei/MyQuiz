import React, { Component } from 'react';
import Menu from './Menu'
import { Link } from 'react-router-dom'

class Theme extends Component {

  render() {
    return (
      <div className ="Theme">
        <Menu/>
        <Link to='/Theme'><i class="fa fa-chevron-left"></i><span className="displaymobile">Revenir au Thème</span></Link>
        <h2>Vous avez choisi le thème : THEME</h2>
        <h3> La question ..........</h3>
        <h4> QUESTION 3 / 20 </h4>

        <div className ="themes">
          <div className="theme">
            <h2>3456</h2>
          </div>
          <div className ="theme">
            <h2>3456</h2>
          </div>
          <div className ="theme">
            <h2>3456</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Theme;

import React, { Component } from 'react';
import Menu from './Menu'
import Invitation from './Invitation'
import { Link } from 'react-router-dom'
 class Theme extends Component {

  render() {
   const multi = this.props.match.params.multi;
     console.log(this.props.match.params.multi);

    return (
      <div className ="Theme">
        <Menu/>
        <Link to='/Mode_jeu'><i class="fa fa-chevron-left"></i><span className="displaymobile">Revenir au mode de jeu</span></Link>
        <div class="haut">
          <h2>Choississez un thème</h2>       
          <div className="invitation">{multi === "multi"? <Invitation/>:<p></p>} </div>
        </div>
        <div className = "touslesthemes">
        <div className ="themes">
          <div className="theme">
            <Link to={`/Theme/${ multi }/Questions`}><h2><i className="fa fa-book"></i> Histoire</h2>
            <span>Libellé1</span></Link>
          </div>
          <div className ="theme">
            <h2><i className="fa fa-globe"></i>Géographie</h2>
            <span>Libellé1</span>
          </div>
          <div className ="theme">
            <h2><i className="fa fa-film"></i>Film</h2>
            <span>Libellé1</span>
          </div>
          <div className = "theme">
            <h2><i className="fa fa-pencil-alt"></i>Artistes</h2>
            <span>Libellé1</span>
          </div>
          <div className = "theme">
            <h2><i className="fa fa-glasses"></i>Culture G</h2>
            <span>Libellé1</span>
          </div>
          <div className="theme">
            <h2><i className="fa fa-calculator"></i>Mathématique</h2>
            <span>Libellé1</span>
          </div>
          <p><i className="fa fa-dice-two"></i><u>Jouer en mode aléatoire</u></p>
        </div>
      </div>
      

      
      </div>
    );
  }
}

export default Theme;

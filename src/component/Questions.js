import React, { Component } from 'react';
import Menu from './Menu'
import {Route } from 'react-router-dom'

class Theme extends Component {

  render() {
       const multi = this.props.match.params.multi;

       const path = "/Theme/"+multi;
              console.log(multi);
       const Button = ({multi}) => (
       <Route 
        render = { ( {history} ) => (
         <button onClick = { () => { history.push(path) }}>
          <i class="fa fa-chevron-left"></i><span className="displaymobile">Retour</span>
         </button>
        )}
        />
      )
       
       
    return (
      <div className ="Theme">
        <Menu/>
      {/*   {multi === "multi"? 
          <Link to={`/Theme/${ "multi" }`}><i class="fa fa-chevron-left"></i><span className="displaymobile">Revenir au Thème</span></Link>
        :  
        <Link to={`/Theme/${ "solo" }`}><i class="fa fa-chevron-left"></i><span className="displaymobile">Revenir au Thème</span></Link>} */}
        
        <Button multi={multi}/>
      
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

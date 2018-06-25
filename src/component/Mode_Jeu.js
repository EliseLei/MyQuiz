import React, { Component } from 'react';
import Menu from './Menu'
import { Link } from 'react-router-dom'

 class Mode_Jeu extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      multi : "multi"
    };
  }

  componentWillMount  = (username) => {
    if(this.props.location.state && this.props.location.state.username && !this.state.username) {
      this.setState({username:this.props.location.state.username})
      console.log("coucou");
    }
  }
  
  render() {
    // console.log(this.state.multi);
    return (
      <div className ="Mode_jeu">
        <Menu username={this.state.username}/>
        <h2>Choississez un mode de jeu</h2>
    
         <div className ="modes">
           <Link to={{
             pathname: `/Theme/${ "solo" }`,
             state: {username: this.state.username}
           }} className ="mode">
             <h2><i className ="fa fa-user"></i> MODE SOLO</h2>
          </Link>
          <Link to={{
            pathname: `/Theme/${ "multi" }`,
            state: {username: this.state.username}
          }} className ="mode">
             <h2><i className ="fa fa-users"></i>MODE MULTIJOUEUR</h2>
            </Link>
         </div>
        
      </div>
    );
  }
}

export default Mode_Jeu;

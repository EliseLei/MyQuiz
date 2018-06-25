import React, { Component } from 'react';
import Pseudo from './Pseudo'
import Mail from './Mail'


class Invitation extends Component {
  
  render() {
      
    return (
      <div className = "Invitation">
        <Pseudo/>
        <Mail/>
      </div>
          
    );
  }
}

export default Invitation;

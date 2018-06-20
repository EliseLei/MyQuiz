import React, { Component } from 'react';
import Pseudo from './Pseudo'
import Email from './Email'


class Invitation extends Component {
  
  render() {
      
    return (
      <div className = "Invitation">
        <Pseudo/>
        <Email/>
      </div>
          
    );
  }
}

export default Invitation;

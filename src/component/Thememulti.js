import React, { Component } from 'react';
import Menu from './Menu'
import Invitation from './Invitation'
import Theme from './Theme'
import { Link } from 'react-router-dom'

 class Thememulti extends Component {

  render() {

    return (
      <div className ="Thememulti">
        <Theme/>
        <Invitation/>
      </div>
    );
  }
}

export default Thememulti;

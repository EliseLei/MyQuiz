import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import { Switch, Route } from 'react-router-dom'
import Home from './component/Home';
import Connexion from './component/Connexion';
import Inscription from './component/Inscription';
import Theme from './component/Theme';
import Mode_Jeu from './component/Mode_Jeu';
import MonProfil from './component/MonProfil';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Connexion}/>
          <Route exact path='/Inscription' component={Inscription}/>
          <Route exact path='/MonProfil' component={MonProfil}/>
          <Route exact path='/Mode_Jeu' component={Mode_Jeu}/>
          <Route exact path='/Theme' component={Theme}/>
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import './index.css';
import { Switch, Route } from 'react-router-dom'
import Connexion from './component/Connexion';
import Inscription from './component/Inscription';
import Theme from './component/Theme';
import Mode_Jeu from './component/Mode_Jeu';
import MonProfil from './component/MonProfil';
import Questions from './component/Questions';
import Thememulti from './component/Thememulti';
import NotFound from './component/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Connexion}/>
          <Route exact path='/Inscription' component={Inscription}/>
          <Route exact path='/MonProfil' component={MonProfil}/>
          <Route exact path='/Mode_Jeu' component={Mode_Jeu}/>
          <Route path='/Thememulti' component={Thememulti}/>
          <Route exact path='/Theme' component={Theme}/>
          <Route exact path='/Theme/Questions' component={Questions}/>
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

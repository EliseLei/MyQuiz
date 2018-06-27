import React, { Component } from 'react'
import Menu from './Menu'
import { Link, Route } from 'react-router-dom'
import axios from "axios/index"

class Result extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
        };
    }

    componentDidMount() {
        this.setState({username: this.props.location.state.username})
        console.log(this.props.location.state.username)
    }

    render() {
        const victory = this.props.location.state.victory;
        const multi = this.props.location.state.modeJeu;
        const username = this.state.username;
        const points = this.props.location.state.points;

console.log(victory);
        return (
            <div className="Result">
                <Menu username={username}/>

                { victory == true ?
                    <div>
                        <h1>Victoire</h1>
                        <img src={require("../img/victoirrre.jpg")}/>
                    </div>
                    :
                    <div>
                        <h1>Défaite</h1>
                        <img src={require("../img/defaitee.jpg")}/>
                    </div>
                        }
                <h2>Votre Score : {points} / 10 </h2>

                <Link to={{
                    pathname : `/Theme/${ multi }`,
                    state: {multi: multi, username: username}
                }}>
                    <input type="button" id={"bouton"} className="champs btn_commencer" value="Choisir un Nouveau theme"/>
                </Link>

                <Link to={{
                    pathname : `/Mode_Jeu`,
                    state: {multi: multi, username: username}
                }} >
                    <input type="button" id={"bouton"} className="champs btn_commencer" value="Retourner à l'accueil"/>
                </Link>

                <Link to={{
                    pathname : `/MonProfil`,
                    state: {multi: multi, username: username}
                }} >
                    <input type="button" id={"bouton"} className="champs btn_commencer" value="Voir mes statistiques"/>
                </Link>
            </div>
        );
    }
}

export default Result;

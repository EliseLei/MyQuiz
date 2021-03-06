import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios/index";

class Inscription extends Component {
  
  seconnecter = () => {

    {/** connecter avec l'api puis faire un post **/}
  //  this.props.changerIsLoggedIn();
    this.props.history.push("/Mode_jeu");
  }

    componentDidMount(values){
        var username = document.getElementById("username").value;email
        var email = document.getElementById("email").value;
        var mdp = document.getElementById("mdp").value;
        var confirmationmdp = document.getElementById("confirmationmdp").value;
        // var bodyFormData = new FormData();
        // bodyFormData.set('username', username);
        // bodyFormData.set('password', mdp);
        // bodyFormData.set('email', email);
        // bodyFormData.set('confirmationmdp', confirmationmdp);
        console.log(email);
        // let data = new URLSearchParams();
        // data.append("fos_user_registration_form_email", email);
        // data.append("fos_user_registration_form_plainPassword_first", ['plainPassword'][mdp]);
        // data.append("fos_user_registration_form_plainPassword_second", ['plainPassword'][confirmationmdp]);
        // data.append("fos_user_registration_form_username",[username]);
        // console.log(data);
        // return {
        //     payload: axios.post('http://localhost:8000/register/', data)
        // }


        axios.post('http://localhost:8000/register/', {
            email: email,
            username: username,
            password: mdp,
            password2: mdp,
            config: { headers: {'Content-Type': 'application/json' }}
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        // axios({
        //     method: 'post',
        //     url: 'http://localhost:8000/register/',
        //     data: {
        //       "bodyFormData
        //     },
        //     config: { headers: {'Content-Type': 'application/json' }}
        // })
        //     .then(function (response) {
        //         //handle success
        //         console.log(response);
        //     })
        //     .catch(function (response) {
        //         //handle error
        //         console.log(response);
        //     });
    }
  render() {
    /*const isLoggedIn = this.state.isLoggedIn;
      if (isLoggedIn === true) {
          return ( <Redirect to="/Inscription"/>);
      }  */
      
    return (
      <div className = "inscription">
        <h1>REACT QUIZ </h1>
        <p className ="sous-titre">  Découvrez des questions sur</p>
        <div className ="formulaire">
          <div className ="ensemble_champ">
            <span>Votre Pseudo*</span> 
            <input type="text" className ="champs" id="username" placeholder="Pseudo"/>
          </div>
          <div className ="ensemble_champ">
            <span>Votre Email*</span> 
            <input type="text" className ="champs" id="email" placeholder="Email"/>
          </div>
          <div className ="ensemble_champ">
            <span>Votre mot de passe* <span className ="mini">Minimum 8 caractères</span></span> 
            <input type="password" className ="champs" id="mdp" placeholder="Mot de passe"/>
          </div>
          <div className ="ensemble_champ">
            <span>Confirmation mot de passe*</span> 
            <input type="password" className ="champs" id="confirmationmdp" placeholder="Confirmation Mot de passe"/>
          </div>
          <div className ="ensemble_champ">
            <input type="button" onClick={this.seconnecter} className ="champs btn_commencer" value="COMMENCER"/>
          </div>
          <Link to='/'><u>Déjà un compte ? Connectez-vous </u></Link>
        </div>
      
      </div>
          
    );
  }
}

export default Inscription;

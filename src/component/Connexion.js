import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios/index";

class Connexion extends Component {
  constructor(props){
    super(props);
    this.setInformation = this.setInformation.bind(this)

    this.state = {
        username : '',
        data : []
    }
  }

  setInformation = (e) => {
    var username = e.target.value;
    this.setState({username:username});
      console.log(username);
  }

  seconnecter = () => {
    var username = document.getElementById("username").value;
    var motdepasse = document.getElementById("mdp").value;
      var bodyFormData = new FormData();
      bodyFormData.set('username', username);
      bodyFormData.set('password', motdepasse);

    {

        // axios.defaults.headers.common['Authorization'] = 'Bearer  eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJyb3JvIiwiaWF0IjoxNTI5MDU0OTA0LCJleHAiOjE1NjA1OTA5MDR9.ULSjYfRHWmIVvnDwqYJU0u13j-FptQHLq9vippUyyInyVwTF7KzqnS9dTua6QizeyC448JsfmmYgOzaqvuDeD-TW7pAEfjct0N-U_nCBGJcx3ScWiOUc5Ew3Fwno0B6BizyXSQRoW7TPGXlgOjSdcpXqe5M3SVGRG5aaRxBhldjS48UJEkxh1vAFtXEGLkpHjYaXN9oRyL7rQjOfLVEg4LKbwgp0uFe6ii7gSr_ha5GUOIBXFhwsk8RI30t44X4ZacLrAf1tYQqNdpsULJvlhj9IwvwtVotReE65gdFaTGDFC-3Vo_UwlO8IWrVUexXpzklpCMSghwW2uD9dvAKd7o9SebpiCNHqFa8YX_o3Xv0O5VG2KLcbRtYIRMyKQBu0EabTmBZ_aRHTuAiXzOtviBtGdEh0gV0khfiDMt8q963LiVVhGB-gfQ51ff3kwQkFXASxQ_UA_mPvH0LeQ8UjZqr6q6ds72XsGjARvv4UCtMIaIHvozgtX4Y5DF40HdxecSm-IDWkwb8BRpa_aMIKUwzIwvPGux9fZbYVCcKa3he3WcJjsUAwA1gjPvmawBnaKOLvYqnwcVw9PGVG-V8MK_oL970XWPgI2KnCRUlflfsEWijDAJAIGwcihXiRzZOHayeZ3kw6hIsi5z8QV5nVOPbcvQmFg8ZAsH44EsoaVqo';
        // console.log(axios.defaults.headers)


        axios({
            method: 'post',
            url: 'http://localhost:8000/api/login_check',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });



    }
  //  this.props.changerIsLoggedIn();
    this.props.history.push({
      pathname : "/Mode_jeu",
      state : {username : this.state.username}
    });
  }

  
  render() {
    /*const isLoggedIn = this.state.isLoggedIn;
      if (isLoggedIn === true) {
          return ( <Redirect to="/Connexion"/>);
      }  */
      const login_uri = 'http://localhost:8000/api/login_check';

      return (
      <div className="inscription">
        <h1>REACT QUIZ </h1>
        <p className="sous-titre">  Découvrez des questions sur </p>
          <div className="formulaire">
            <div className="ensemble_champ">
              <span>Votre Pseudo</span>
              <input type="text" className="champs" id="username" onChange={this.setInformation} placeholder="Email"/>
            </div>
            <div className="ensemble_champ">
              <span>Votre mot de passe</span> 
              <input type="password" className="champs" id="mdp" placeholder="Mot de passe"/>
            </div>
            <div className="ensemble_champ">
              <input type="button" onClick={this.seconnecter} className="champs btn_commencer" value="COMMENCER"/>
            </div>
              <Link to='/Inscription'><u>Inscrivez-vous ! </u></Link>
        </div>
      
      </div>
          
    );
  }
}

export default Connexion;

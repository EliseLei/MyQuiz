import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios/index";

class Connexion extends Component {
  
  seconnecter = () => {
    var username = document.getElementById("username").value;
    var motdepasse = document.getElementById("mdp").value;
      // formData.append('username',username);
      // formData.append('password',motdepasse);
    //
    // var dataUsername = formData.get('username');
    // var dataPassword = formData.get('password');
    //   console.log(dataUsername);
    //   console.log(dataPassword);

    {

        axios.defaults.headers.common['Authorization'] = 'Bearer  eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJyb3JvIiwiaWF0IjoxNTI5MDU0OTA0LCJleHAiOjE1NjA1OTA5MDR9.ULSjYfRHWmIVvnDwqYJU0u13j-FptQHLq9vippUyyInyVwTF7KzqnS9dTua6QizeyC448JsfmmYgOzaqvuDeD-TW7pAEfjct0N-U_nCBGJcx3ScWiOUc5Ew3Fwno0B6BizyXSQRoW7TPGXlgOjSdcpXqe5M3SVGRG5aaRxBhldjS48UJEkxh1vAFtXEGLkpHjYaXN9oRyL7rQjOfLVEg4LKbwgp0uFe6ii7gSr_ha5GUOIBXFhwsk8RI30t44X4ZacLrAf1tYQqNdpsULJvlhj9IwvwtVotReE65gdFaTGDFC-3Vo_UwlO8IWrVUexXpzklpCMSghwW2uD9dvAKd7o9SebpiCNHqFa8YX_o3Xv0O5VG2KLcbRtYIRMyKQBu0EabTmBZ_aRHTuAiXzOtviBtGdEh0gV0khfiDMt8q963LiVVhGB-gfQ51ff3kwQkFXASxQ_UA_mPvH0LeQ8UjZqr6q6ds72XsGjARvv4UCtMIaIHvozgtX4Y5DF40HdxecSm-IDWkwb8BRpa_aMIKUwzIwvPGux9fZbYVCcKa3he3WcJjsUAwA1gjPvmawBnaKOLvYqnwcVw9PGVG-V8MK_oL970XWPgI2KnCRUlflfsEWijDAJAIGwcihXiRzZOHayeZ3kw6hIsi5z8QV5nVOPbcvQmFg8ZAsH44EsoaVqo';
        console.log(axios.defaults.headers)
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:8000/api/login_check',
        //     data:
        //         {"username":"roro",
        //             "password":"roro"},
        //
        //     crossDomain: true,
        //     dataType: 'application/json;charset=UTF-8',
        //     responseType: 'application/json;charset=UTF-8',
        //     ContentType: "application/json;charset=UTF-8",
        //     headers: {
        //         'accept': 'application/json;charset=UTF-8',
        //         'content-type': 'application/json;charset=UTF-8'
        //     }
        // });


    }
  //  this.props.changerIsLoggedIn();
    this.props.history.push("/Mode_jeu");
  }

  
  render() {
    /*const isLoggedIn = this.state.isLoggedIn;
      if (isLoggedIn === true) {
          return ( <Redirect to="/Connexion"/>);
      }  */
      
    return (
      <div className="inscription">
        <h1>REACT QUIZ </h1>
        <p className="sous-titre">  Découvrez des questions sur </p>
          <div className="formulaire">
            <div className="ensemble_champ">
              <span>Votre Email</span> 
              <input type="text" className="champs" id="username" placeholder="Email"/>
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

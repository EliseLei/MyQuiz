import React, { Component } from 'react';
import Menu from './Menu'
import Invitation from './Invitation'
import { Link } from 'react-router-dom'
import axios from "axios/index";

 class Theme extends Component {

     constructor(props){
         super(props);

         this.state = {
             data : []
         };
     }

     componentDidMount(){
         axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJyb3JvIiwiaWF0IjoxNTI5MDU0OTA0LCJleHAiOjE1NjA1OTA5MDR9.ULSjYfRHWmIVvnDwqYJU0u13j-FptQHLq9vippUyyInyVwTF7KzqnS9dTua6QizeyC448JsfmmYgOzaqvuDeD-TW7pAEfjct0N-U_nCBGJcx3ScWiOUc5Ew3Fwno0B6BizyXSQRoW7TPGXlgOjSdcpXqe5M3SVGRG5aaRxBhldjS48UJEkxh1vAFtXEGLkpHjYaXN9oRyL7rQjOfLVEg4LKbwgp0uFe6ii7gSr_ha5GUOIBXFhwsk8RI30t44X4ZacLrAf1tYQqNdpsULJvlhj9IwvwtVotReE65gdFaTGDFC-3Vo_UwlO8IWrVUexXpzklpCMSghwW2uD9dvAKd7o9SebpiCNHqFa8YX_o3Xv0O5VG2KLcbRtYIRMyKQBu0EabTmBZ_aRHTuAiXzOtviBtGdEh0gV0khfiDMt8q963LiVVhGB-gfQ51ff3kwQkFXASxQ_UA_mPvH0LeQ8UjZqr6q6ds72XsGjARvv4UCtMIaIHvozgtX4Y5DF40HdxecSm-IDWkwb8BRpa_aMIKUwzIwvPGux9fZbYVCcKa3he3WcJjsUAwA1gjPvmawBnaKOLvYqnwcVw9PGVG-V8MK_oL970XWPgI2KnCRUlflfsEWijDAJAIGwcihXiRzZOHayeZ3kw6hIsi5z8QV5nVOPbcvQmFg8ZAsH44EsoaVqo';

         axios.get('http://localhost:8000/api/themes')
             .then(res => {
                 this.setState({data : res.data})
                 // console.log(response);
                 // console.log(this.state.data);
             })
             .catch(function (error) {
                 console.log(error);
             });
     }
  render() {
    const username = this.props.location.state.username;
    const multi = this.props.match.params.multi;
     // console.log(this.props.match.params.multi);


    const themList = this.state.data.map((theme) => (
        <Link to={{
            pathname : `/Theme/${ multi }/Questions/theme-${theme.id}`,
            state: {username: this.state.username, themeLibelle: theme.libelle}

        }} className ="theme">
            <div>
                <img className="img_theme" src={theme.pic} alt="marche pas"/> <h2>{theme.libelle}</h2>
            </div>
        </Link>
    ))
      // <Link({to: "task", params: {userId: params.userId}, onClick: this.handleClick("foo")}, "foo task")


    return (
      <div className ="Theme">
        <Menu username={username}/>
        <Link to= {{
          pathname: '/Mode_jeu',
          state: {username: username}
        }}

        ><i className="fa fa-chevron-left"></i><span className="displaymobile">Revenir au mode de jeu</span></Link>
          <div className="haut">
          <h2>Choississez un thème</h2>       
          <div className="invitation">{multi === "multi"? <Invitation/>:<p></p>} </div>
          </div>
        <div className = "touslesthemes">
            <div className ="themes">
                {themList}


                {/*<div className="theme">*/}
                {/*<Link to={`/Theme/${ multi }/Questions`}><h2><i className="fa fa-book"></i> Histoire</h2>*/}
                {/*<span>{componentD
                idMount()</span></Link>*/}
                <p><u>Jouer en aléatoire</u></p>
            </div>

      </div>
      

      
      </div>
    );
  }
}

export default Theme;

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
                 console.log(this.state.data);
             })
             .catch(function (error) {
                 console.log(error);
             });
     }
  render() {
   const multi = this.props.match.params.multi;
     console.log(this.props.match.params.multi);


    const themList = this.state.data.map((theme) => (
        <div className ="theme">
            <h2><i className="fa fa-globe">{theme.libelle}</i></h2>
        </div>
    ))


    return (


      <div className ="Theme">
        <Menu/>
        <Link to='/Mode_jeu'><i class="fa fa-chevron-left"></i><span className="displaymobile">Revenir au mode de jeu</span></Link>
          <div class="haut">
          <h2>Choississez un thème</h2>       
          <div className="invitation">{multi === "multi"? <Invitation/>:<p></p>} </div>
          </div>
        <div className = "touslesthemes">
            <div className ="themes">


                {themList}


                {/*<div className="theme">*/}
                {/*<Link to={`/Theme/${ multi }/Questions`}><h2><i className="fa fa-book"></i> Histoire</h2>*/}
                {/*<span>{componentDidMount()</span></Link>*/}
            </div>

      </div>
      </div>
      

      
    );
  }
}

export default Theme;

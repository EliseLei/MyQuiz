import React, { Component } from 'react';
import axios from "axios/index";

class Resultats extends Component {
    constructor(props){
        super(props);
        this.state = {
            results : [],
            nbVictory : 0,
            nbDefeat : 0,
            nbPoint : 0,

        };
    }

    componentDidMount(){

        axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJyb3JvIiwiaWF0IjoxNTI5MDU0OTA0LCJleHAiOjE1NjA1OTA5MDR9.ULSjYfRHWmIVvnDwqYJU0u13j-FptQHLq9vippUyyInyVwTF7KzqnS9dTua6QizeyC448JsfmmYgOzaqvuDeD-TW7pAEfjct0N-U_nCBGJcx3ScWiOUc5Ew3Fwno0B6BizyXSQRoW7TPGXlgOjSdcpXqe5M3SVGRG5aaRxBhldjS48UJEkxh1vAFtXEGLkpHjYaXN9oRyL7rQjOfLVEg4LKbwgp0uFe6ii7gSr_ha5GUOIBXFhwsk8RI30t44X4ZacLrAf1tYQqNdpsULJvlhj9IwvwtVotReE65gdFaTGDFC-3Vo_UwlO8IWrVUexXpzklpCMSghwW2uD9dvAKd7o9SebpiCNHqFa8YX_o3Xv0O5VG2KLcbRtYIRMyKQBu0EabTmBZ_aRHTuAiXzOtviBtGdEh0gV0khfiDMt8q963LiVVhGB-gfQ51ff3kwQkFXASxQ_UA_mPvH0LeQ8UjZqr6q6ds72XsGjARvv4UCtMIaIHvozgtX4Y5DF40HdxecSm-IDWkwb8BRpa_aMIKUwzIwvPGux9fZbYVCcKa3he3WcJjsUAwA1gjPvmawBnaKOLvYqnwcVw9PGVG-V8MK_oL970XWPgI2KnCRUlflfsEWijDAJAIGwcihXiRzZOHayeZ3kw6hIsi5z8QV5nVOPbcvQmFg8ZAsH44EsoaVqo';

        axios.get('http://localhost:8000/api/results')
            .then(res => {
                const results = [];
                for (let q in res.data) {
                    console.log(res.data[q])
                    results.push(res.data[q])
                    // console.log(res.data[q].victory)
                    this.setState({ nbPoint : this.state.nbPoint+res.data[q].nbPoint})
                    if(res.data[q].victory === true){
                        this.setState({nbVictory : this.state.nbVictory + 1})
                    }
                    else{
                        this.setState({nbDefeat : this.state.nbDefeat + 1})
                    }

                }
                this.setState({results : results})
                console.log(this.state.results);

            })
            .catch(function (error) {
                console.log(error);
            });
    }


  render() {
      // const resultList = this.state.results;
      const nbVictory = this.state.nbVictory;
      const nbDefeat = this.state.nbDefeat;
      const nbPoint = this.state.nbPoint;


      return (
      <div className="Resultats">
        <h2>Résultats</h2>
          {
              // resultList.map((result, index) => (
              <div className ="themes">
                  <div className="theme" onClick={this.handleClick}>

                      <h2>{nbPoint} {nbPoint > 1 ? "points totals cumulés" : "point seulement O:"}  </h2>
                      <h3>
                          {nbVictory} {nbVictory > 1 ? "Victoires" : "Victoire"}
                      </h3>
                      <h3>
                          {nbDefeat} {nbDefeat > 1 ? "Defaites" : "Defaite"}
                      </h3>
                  </div>
              </div>
              // ))
          }
      </div>
    );
  }
}

export default Resultats;

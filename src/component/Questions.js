import React, { Component } from 'react';
import Menu from './Menu'
import { Link, Route } from 'react-router-dom'
import axios from "axios/index";

class Theme extends Component {
    constructor(props){
        super(props);
        this.state = {
            quiz : [],
            radioValue: "",
            answers: [],
            goodAnswers: [],
            currentIndex: 0,
            points: 0,
            username: "",
        };
    }

    componentWillMount(){
        this.setState({username: this.props.location.state.username})
        const theme = this.props.match.params.themeId;
console.log(theme);
        axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJyb3JvIiwiaWF0IjoxNTI5MDU0OTA0LCJleHAiOjE1NjA1OTA5MDR9.ULSjYfRHWmIVvnDwqYJU0u13j-FptQHLq9vippUyyInyVwTF7KzqnS9dTua6QizeyC448JsfmmYgOzaqvuDeD-TW7pAEfjct0N-U_nCBGJcx3ScWiOUc5Ew3Fwno0B6BizyXSQRoW7TPGXlgOjSdcpXqe5M3SVGRG5aaRxBhldjS48UJEkxh1vAFtXEGLkpHjYaXN9oRyL7rQjOfLVEg4LKbwgp0uFe6ii7gSr_ha5GUOIBXFhwsk8RI30t44X4ZacLrAf1tYQqNdpsULJvlhj9IwvwtVotReE65gdFaTGDFC-3Vo_UwlO8IWrVUexXpzklpCMSghwW2uD9dvAKd7o9SebpiCNHqFa8YX_o3Xv0O5VG2KLcbRtYIRMyKQBu0EabTmBZ_aRHTuAiXzOtviBtGdEh0gV0khfiDMt8q963LiVVhGB-gfQ51ff3kwQkFXASxQ_UA_mPvH0LeQ8UjZqr6q6ds72XsGjARvv4UCtMIaIHvozgtX4Y5DF40HdxecSm-IDWkwb8BRpa_aMIKUwzIwvPGux9fZbYVCcKa3he3WcJjsUAwA1gjPvmawBnaKOLvYqnwcVw9PGVG-V8MK_oL970XWPgI2KnCRUlflfsEWijDAJAIGwcihXiRzZOHayeZ3kw6hIsi5z8QV5nVOPbcvQmFg8ZAsH44EsoaVqo';
        axios.get('http://localhost:8000/api/themes/'+theme+'/questions')
            .then(res => {
                const quiz = [];
                const answers = [];

                for (let q in res.data['quiz']) {
                    console.log(res.data['quiz'][q])
                    quiz.push(res.data['quiz'][q])
                    answers.push(res.data['quiz'][q].reponse)

                }
                this.setState({quiz : quiz})
                this.setState({goodAnswers : answers})
                // console.log(res.data);
                // console.log(this.state.quiz);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    CountPoint= () => {

            for(var j=0;j<this.state.goodAnswers.length;j++) {
                if(this.state.answers == this.state.goodAnswers[j]){
                    // console.log(this.state.answers[i]);
                    // console.log(this.state.answers[j]);
                    this.setState({points: this.state.points+1 })
                }
            }
            this.setState({answers: []})
    }
    EnvoisReponse= () => {

        var radioChecked = document.querySelector('input[name="proposition"]:checked');

        if (radioChecked) {


            var valeur = document.querySelector('input[name="proposition"]:checked').value;
            this.setState({radioValue: valeur});
            this.state.answers.push(valeur);

            console.log(this.state.quiz.reponse);
            console.log(this.state.answers);
            radioChecked = document.querySelector('input[name="proposition"]').checked=false;
            var ele = document.getElementsByName("proposition");
            for(var i=0;i<ele.length;i++) {
                ele[i].checked = false;
            }

        }
        console.log(this.state.radioValue);

        return valeur;
    }

    VoirResult = () => {

        let victory = false;
        const Data = [ { victory: true,
            nbPoint: 8,
            User: "\/users\/3" } ];

        if(this.state.points >= 6){
            victory = true;
        }
            axios({
                  method: 'post',
                  url: 'http://localhost:8000/api/results',
                  data: { victory: victory,
                      nbPoint: this.state.points,
                      User: "/api/users/3" },
                  config: { headers: {'Content-Type': 'application/json' }}
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.props.history.push({
            pathname : "/Result",
            state : {username: this.state.username, points : this.state.points, victory : victory, modeJeu: this.props.match.params.multi}
        });
    }


  render() {
      const theme = this.props.match.params.themeId;
      const multi = this.props.match.params.multi;
      const themeLibelle = this.props.location.state.themeLibelle;
      const username = this.props.location.state.username;
      var reponse = this.state.radioValue;
      var goodAnswers = this.state.goodAnswers;
      var anwsers    = this.state.answers;
      var nbPoints = this.state.points;

       const path = "/Theme/"+multi;
       const Button = ({multi}) => (
       <Route 
        render = { ( {history} ) => (
         <button onClick = { () => { history.push(path) }}>
          <i class="fa fa-chevron-left"></i><span className="displaymobile">Retour</span>
         </button>
        )}
        />
      )
      const quizList = this.state.quiz;
       console.log(quizList)
      // console.log(url);
      // console.log(theme);
      // console.log(themeId);
const currentQuestion = quizList[this.state.currentIndex];


      return (

      <div className ="Theme">
          <Menu username={username}/>
      {/*   {multi === "multi"? 
          <Link to={`/Theme/${ "multi" }`}><i class="fa fa-chevron-left"></i><span className="displaymobile">Revenir au Thème</span></Link>
        :  
        <Link to={`/Theme/${ "solo" }`}><i class="fa fa-chevron-left"></i><span className="displaymobile">Revenir au Thème</span></Link>} */}

        <Button multi={multi}/>

          <h2>Vous avez choisi le thème : {themeLibelle} </h2>
          <h2>Vous devez faire 6 bonnes réponses ou plus pour gagner, Bonne chance !!
          </h2>

              <div>
                {
                    quizList.map((quiz, index) => (

                        <form id={"quizForm_"+ index} name="quizForm" method="post">
                            <div className="question" id={index+1}>
                                <span className="questionList">
                                    <h4> QUESTION {index+1} / 10 </h4>
                                    <h3>{quiz.question}</h3>
                                </span>

                                {quiz.proposition_1 ?
                                        <div className ="themes">
                                            <div className="theme" onClick={this.handleClick}>
                                                <input type="radio" id="proposition_1" name="proposition" value={quiz.proposition_1}/>
                                                <label>{quiz.proposition_1}</label>
                                            </div>
                                        </div> :
                                  "" }

                                {quiz.proposition_2 ?
                                <div className ="themes">
                                    <div className="theme" onClick={this.handleClick}>
                                        <input type="radio" id="proposition_2" name="proposition" value={quiz.proposition_2}/>
                                        <label>{quiz.proposition_2}</label>
                                    </div>
                                </div> :
                                "" }
                                {quiz.proposition_3 ?
                                    <div className ="themes">
                                        <div className="theme" onClick={this.handleClick}>
                                            <input type="radio" id="proposition_3" name="proposition" value={quiz.proposition_3}/>
                                            <label>{quiz.proposition_3}</label>
                                        </div>
                                    </div> :
                                ""}

                                {quiz.proposition_4 ?
                                <div className ="themes">
                                    <div className="theme" onClick={this.handleClick}>
                                        <input type="radio" id="proposition_4" name="proposition" value={quiz.proposition_4}/>
                                        <label>{quiz.proposition_4}</label>
                                    </div>
                                </div> :
                                ""}
                                    <div className="ensemble_champ">
                                        <input type="button" onClick={ (e) => {
                                            this.EnvoisReponse();
                                            document.getElementById("bouton_"+index).style.display = 'none';
                                            this.CountPoint();
                                        }}  id={"bouton_"+index} className="champs btn_commencer" value="Valider la réponse"/>
                                        {(reponse == quiz.proposition_1 || reponse == quiz.proposition_2 || reponse == quiz.proposition_3|| reponse == quiz.proposition_4) ? (reponse == quiz.reponse ? <h3 id={"answer_"+ index} className="goodAnswer">Bonne réponse</h3> : <h3 id={"answer_"+ index} className="badAnswer">Mauvaise réponse la rep etait {quiz.reponse}</h3>) : null}
                                        {/*{(reponse == quiz.proposition_1 || reponse == quiz.proposition_2 || reponse == quiz.proposition_3|| reponse == quiz.proposition_4) ? (reponse == quiz.reponse ? document.querySelector('input[name="proposition"]:checked').style.backgroundColor = 'green' :  document.querySelector('input[name="proposition"]:checked').style.backgroundColor = 'red') : null}*/}
                                    </div>



                            </div>
                        </form>
                    ))
                }
                  <h1>{nbPoints} {nbPoints > 1 ? "Bonnes reponses" : "Bonne réponse"}</h1>
                  <input type="button" onClick={ () => {
                      this.VoirResult();
                  }}  id={"result"} className="champs btn_commencer" value="Voir les résultats"/>
                  {/*{isGoodAnwer ? <h3 className="goodAnswer">Bonne réponse</h3> : <h3 className="badAnswer">Mauvaise réponse</h3>}*/}
              </div>

          {/*<div>*/}
              {/*{*/}
                  {/*quizList.map((quiz, index) => (*/}
                      {/*<div className ="themes">*/}
                          {/*<div className="theme">*/}
                              {/*<h3>{quiz.proposition_1}</h3>*/}
                              {/*<h3>{quiz.proposition_2}</h3>*/}
                              {/*<h3>{quiz.proposition_3}</h3>*/}
                              {/*<h3>{quiz.proposition_4}</h3>*/}
                          {/*</div>*/}
                      {/*</div>*/}
                  {/*))*/}
              {/*}*/}
          {/*</div>*/}

          </div>
    );
  }
}

export default Theme;

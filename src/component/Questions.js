import React, { Component } from 'react';
import Menu from './Menu'
import { Link, Route } from 'react-router-dom'
import axios from "axios/index";

class Theme extends Component {
    constructor(props){
        super(props);
        this.state = {
            quiz : [],
            currentIndex: 0
        };
    }

    componentWillMount(){
        const theme = this.props.match.params.themeId;
console.log(theme);
        axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJyb3JvIiwiaWF0IjoxNTI5MDU0OTA0LCJleHAiOjE1NjA1OTA5MDR9.ULSjYfRHWmIVvnDwqYJU0u13j-FptQHLq9vippUyyInyVwTF7KzqnS9dTua6QizeyC448JsfmmYgOzaqvuDeD-TW7pAEfjct0N-U_nCBGJcx3ScWiOUc5Ew3Fwno0B6BizyXSQRoW7TPGXlgOjSdcpXqe5M3SVGRG5aaRxBhldjS48UJEkxh1vAFtXEGLkpHjYaXN9oRyL7rQjOfLVEg4LKbwgp0uFe6ii7gSr_ha5GUOIBXFhwsk8RI30t44X4ZacLrAf1tYQqNdpsULJvlhj9IwvwtVotReE65gdFaTGDFC-3Vo_UwlO8IWrVUexXpzklpCMSghwW2uD9dvAKd7o9SebpiCNHqFa8YX_o3Xv0O5VG2KLcbRtYIRMyKQBu0EabTmBZ_aRHTuAiXzOtviBtGdEh0gV0khfiDMt8q963LiVVhGB-gfQ51ff3kwQkFXASxQ_UA_mPvH0LeQ8UjZqr6q6ds72XsGjARvv4UCtMIaIHvozgtX4Y5DF40HdxecSm-IDWkwb8BRpa_aMIKUwzIwvPGux9fZbYVCcKa3he3WcJjsUAwA1gjPvmawBnaKOLvYqnwcVw9PGVG-V8MK_oL970XWPgI2KnCRUlflfsEWijDAJAIGwcihXiRzZOHayeZ3kw6hIsi5z8QV5nVOPbcvQmFg8ZAsH44EsoaVqo';
        axios.get('http://localhost:8000/api/themes/'+theme+'/questions')
            .then(res => {
                const quiz = [];

                for (let q in res.data['quiz']) {
                    console.log(res.data['quiz'][q])
                    quiz.push(res.data['quiz'][q])
                }
                this.setState({quiz : quiz})
                console.log(res.data);
                console.log(this.state.quiz);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // handleClick = (e) => {
    //     this.setState({currentIndex: ++})
    //
    // }
//     axios.get('/user', {
//     params: {
//         ID: 12345
//     }
// })

  render() {
      const theme = this.props.match.params.themeId;
      const multi = this.props.match.params.multi;
      const username = this.props.location.state.username;

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
      
        <h2>Vous avez choisi le thème : THEME</h2>
        <div>
            {
                quizList.map((quiz, index) => (

                <div className="question" id={index+1}>
                    <h4> QUESTION {index+1} / 10 </h4>

                    <h3>{currentQuestion.question}</h3>
                    <div className ="themes">
                        <div className="theme" onClick={this.handleClick}>
                            <h3>{quiz.proposition_1}</h3>
                        </div>
                    </div>
                    <div className ="themes">
                        <div className="theme" onClick={this.handleClick}>
                            <h3>{quiz.proposition_2}</h3>
                        </div>
                    </div>
                    <div className ="themes">
                        <div className="theme" onClick={this.handleClick}>
                            <h3>{quiz.proposition_3}</h3>
                        </div>
                    </div>
                    <div className ="themes">
                        <div className="theme" onClick={this.handleClick}>
                            <h3>{quiz.proposition_4}</h3>
                        </div>
                    </div>
                </div>
                ))
            }

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

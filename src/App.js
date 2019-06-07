import React, { Component } from "react";
import Quiz from "./components/Quiz";
import QuizInfo from "./components/QuizInfo";
import Result from "./components/Result";
import Start from "./components/Start";
import socketIOClient from "socket.io-client";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import Grid from "@material-ui/core/Grid";
import SimpleDialog from "./components/Dialog";

let questions = []



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      result: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answerGiven: "",
      answer: "",
      score: 0,
      mode: "begin",
      response: undefined,
      endpoint: "http://127.0.0.1:4001",
      open: false,
      answerCorrect: false,
      answerFalse: false,
      ConfettiShow:false,
      percentage: 0,
      outoftime:false
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.onTryAgain = this.onTryAgain.bind(this);
    this.startGame = this.startGame.bind(this);
  }


  
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => {
      // console.log(data);

      if (parseInt(data) === 1) {
        this.setState({ response: "True" });
      } else if (parseInt(data) === 0) {
        this.setState({ response: "False" });
      } else {
        this.setState({ response: "nothing" });
      }
    });



    fetch("https://opentdb.com/api.php?amount=2&difficulty=easy&type=boolean")
    .then(res => {
      return res.json();
    })
    .then(loadedQuestions => {
      console.log(loadedQuestions.results);
      questions = loadedQuestions.results.map(loadedQuestion => {
        const formattedQuestion = {
          question: loadedQuestion.question,
          answer: loadedQuestion.correct_answer
        };
        return formattedQuestion;
      });
    })
    .then(data =>
      this.setState({
        question: questions[0].question,
        answer: questions[0].answer
      })
    )
    .catch(err => {
      console.error(err);
    });
  
  return questions;
}

  onStartCounter(){
   
    this.interval = setInterval(() => {
     this.setState({
      percentage: this.state.percentage + 10
     })
     if(this.state.percentage === 110){
      clearInterval(this.interval)
      this.setState({
        outoftime:true
       })
      this.setResults()
      
     }
    }, 1000);



  }
  
  

  setUserAnswer() {
    this.setState({ answerGiven: this.state.response }, () =>
      this.handleAnswerSubmit()
    );
  }

  setNextQuestion() {

    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
 
      this.setState({
        answerCorrect : false,
        counter: counter,
        questionId: questionId,
        question: questions[counter].question,
        answerGiven: "",
        answer: questions[counter].answer,
        percentage: 0
      });
  }

  handleAnswerSubmit() {
    if (this.state.answerGiven !== "nothing") {
      if (this.state.answerGiven === this.state.answer) {
        console.log("vraag goed beantwoord");
        this.setState({
          score: this.state.score + 10
        });
        if (this.state.questionId < questions.length) {
          this.onAnswerCorrect();
          setTimeout(() => this.setNextQuestion(), 500);
        } else {
          this.onAnswerCorrect();
          setTimeout(() => this.setResults(this.getResults()), 500);
        }
      } else {
        this.onAnswerFalse();
        setTimeout(() => this.setResults(this.getResults()), 500);
      }
    } else {
      console.log("voer wat in");
    }
  }

  onAnswerCorrect() {
    this.setState({ answerCorrect: true });
  }

  onAnswerFalse() {
    this.setState({ answerFalse: true });
  }

  handleAnswerSelected() {
    this.setUserAnswer();
  }

  getResults() {
    const score = this.state.score;
    return score;
  }

  setResults(result) {
    this.result = this.state.score;
    if (this.result >= 1 && this.result < 50) {
      this.setState({ result: result });
    } else if (this.result === questions.length*10) {
      this.setState({
        ConfettiShow:true,
        result: "You have completed TrapTrivia",
        confetti: true
      });
    } else if (this.state.outoftime){
      this.setState({
        result: "You ran out of time..",
      });
    } else {
      console.log(this.state.outoftime)
      this.setState({ result: "Not even one?" });
    }
  }

  renderQuiz() {
    if (this.state.mode === "game") {
      

      return (
        <div className="container">
          <Grid
            direction="row"
            alignItems="center"
            justify="flex-start"
            spacing={24}
            container
          >
            <Grid item xs={5}>
              <Quiz
                answerCorrect={this.state.answerCorrect}
                answerFalse={this.state.answerFalse}
                notification={this.state.notification}
                answercontent={this.state.response}
                question={this.state.question}
                onAnswerSelected={this.handleAnswerSelected}
                getAnswerClasses={this.getAnswerClasses}
              />
            </Grid>
            <Grid
              container
              direction="column"
              alignItems="stretch"
              justify="flex-start"
              item
              xs={3}
            >
              <Grid item>
                <QuizInfo
                  percentage={this.state.percentage}
                  score={this.state.score}
                  questionId={this.state.questionId}
                  questionTotal={questions.length}
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return null;
    }
  }

  renderStart() {
    if (this.state.mode === "begin") {
      return (
        <div className="container">
          <Grid container alignItems="stretch" justify="flex-start">
            <Grid item xs={8}>
              <Start
                handleClickOpenDialog={this.handleClickOpenDialog}
                onStartGame={this.startGame}
              />

              <SimpleDialog
                selectedValue={this.state.selectedValue}
                open={this.state.open}
                onClose={this.handleClose}
              />
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return null;
    }
  }

  handleClickOpenDialog = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  restartGame() {
    clearInterval(this.interval)

    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=boolean")
    .then(res => {
      return res.json();
    })
    .then(loadedQuestions => {
      // console.log(loadedQuestions.results);
      questions = loadedQuestions.results.map(loadedQuestion => {
        const formattedQuestion = {
          question: loadedQuestion.question,
          answer: loadedQuestion.correct_answer
        };
        return formattedQuestion;
      });
    })
    .then(data =>
      this.setState({
        question: questions[0].question,
        answer: questions[0].answer
      })
    )
    .catch(err => {
      console.error(err);
    });

    
    
    setTimeout(() =>  this.setState({
      mode: "begin",
      result: 0,
      counter: 0,
      questionId: 1,
      score: 0,
      question: questions[0].question,
      answer: questions[0].answer,
      answerFalse:false,
      answerCorrect: false,
      ConfettiShow:false,
      percentage: 0


    }), 500);
   
  }

  startGame() {
    
    setTimeout(() => this.setState({ mode: "game", percentage:0 }), 500);
    clearInterval(this.interval)
    this.onStartCounter()
  }

  renderResult() {
    return (
      <div className="container">
        <Grid
          direction="column"
          alignItems="flex-start"
          justify="flex-start"
          container
          spacing={24}
        >
          <Result ConfettiShow={this.state.ConfettiShow} quizResult={this.state.result} onTryAgain={this.onTryAgain} />
        </Grid>
      </div>
    );
  }

  onTryAgain() {
    this.restartGame();
  }



  render() {
    console.log(this.state.percentage)
    
    return (
      <div className="App">
        <AppHeader />
        {this.renderStart()}
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        <Footer />
      </div>
    );
  }
}



export default App;

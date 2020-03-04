import React, { Component } from 'react';
import './App.css';
//import loadQuestion from './questionLoader';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Characters from './components/Characters'
import { useState, useEffect } from "react";
import Question from './components/Question'
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result'
//import md5 from "md5";

class App extends Component {

  constructor(props) {
  super(props);

  this.state = {
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {},
    result: ''
  };

this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
}

componentDidMount() {
  const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));

  this.setState({
    question: quizQuestions[0].question,
    answerOptions: shuffledAnswerOptions[0]
  });
}

shuffleArray(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

  // const TS = "Date.now()";
  // const PUBLIC_KEY = "9ac99174c6637a3dd38851c3d6b0d5b1";
  // const PRIVATE_KEY = "000a54a0d6a07663808c5278ed1c58f7c9c38bad";
  // const HASH = md5(TS + PRIVATE_KEY + PUBLIC_KEY);
  // const [charactersState, setCharactersState] = useState([]);
  // const [query, setQuery] = useState('Ancient One');
  // const [listNames, setListNames] = useState({
  //   charNames: [
  //     'Ancient One',
  //     'Apocalypse',
  //     'Blade',
  //     'Bullseye',
  //     'Domino',
  //     'Echo',
  //     'Elektra',
  //     'Firelord',
  //     'Grandmaster',
  //     'Kitty Pryde',
  //     'Machine Man',
  //     'Morph',
  //     'Nebula',
  //     'Silver Surfer',
  //     'Squirrel Girl',
  //     'Uatu The Watcher',
  //     'Viper'
  //   ]
  // });
  //
  // useEffect(() => {
  //   getCharacters();
  // }, [query]);
  //
  // const getCharacters = async () => {
  //   const response = await fetch (
  //     `https://gateway.marvel.com/v1/public/characters?name=${query}&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
  //   );
  //   const data = await response.json();
  //   setCharactersState(data.data.results[0]);
  // }
  //
  // const updateSetQueryState = e => {
  //   e.preventDefault();
  //   setQuery(e.target.innerText);
  // }

  // return (
  //   //loadQuestion
  //   <BrowserRouter>
  //     <div className="App">
  //       <Navbar />
  //       <Route path='/home' component={Home} />
  //       <Route path='/characters' component={Characters}>
  //         <h4 className="center"> Characters </h4>
  //         <p>More characters to Explore:</p>
  //         {listNames.charNames.map(charName => (
  //             <button onClick={updateSetQueryState}>
  //                 <p>{charName}</p>
  //             </button>
  //         ))}
  //         <Characters
  //           name={charactersState.name}
  //           description={charactersState.description}
  //         />
  //       </Route>
  //       </div>
  //   </BrowserRouter>
  // )

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults (result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  setUserAnswer(answer) {
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
    answer: answer
    }));
  }

  handleAnswerSelected(event) {
  this.setUserAnswer(event.currentTarget.value);
  if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    )
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    )
  }

  render() {
    return (
    // <div className="App">
    //   <div className="App-header">
    //     <h2>React Quiz</h2>
    //   </div>
        this.state.result ? this.renderResult() : this.renderQuiz()
    )
  }
}

export default App;

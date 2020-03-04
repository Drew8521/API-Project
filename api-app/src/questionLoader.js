import React from 'react';
// import questionList from '/Users/andrewseaman/API-Project/api-app/src/question-loader.js';

const loadQuestion = (props) => {
  return (
      <div className="">
          <p>{props.question}</p>
          <p>{props.answerOne}</p>
          <p>{props.answerTwo}</p>
          <p>{props.questionThree}</p>
          <p>{props.questionFour}</p>
      </div>
  );
}


export default loadQuestion;

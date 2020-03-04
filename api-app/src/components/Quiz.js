import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import AnswerOption from '../components/AnswerOption';



function Quiz(props) {

  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <div className="quiz">
      <Question content={props.question} />
      <div className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
      </div>
    </div>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;

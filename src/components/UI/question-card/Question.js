import React from "react";
import './question.scss';

const Question = ({ question }) => {
    return (
      <div className="question-container">
          <p><span>Question: </span>{question.question}</p>
          <p><span>Answer: </span>{question.answer}</p>
      </div>
    );
};

export default Question;

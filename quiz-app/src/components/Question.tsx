import React from "react";

type QuestionProps = {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
};

const Question: React.FC<QuestionProps> = ({ question, options, onAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((opt, idx) => (
        <button key={idx} onClick={() => onAnswer(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
};

export default Question;
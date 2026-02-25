import React, { useState } from "react";
import Question from "./Question";

type QuizData = {
  question: string;
  options: string[];
  answer: string;
};

const quizData: QuizData[] = [
  { question: "2 + 2 = ?", options: ["3", "4"], answer: "4" },
  { question: "Capital of India?", options: ["Delhi", "Mumbai"], answer: "Delhi" },
  { question: "React is a ___?", options: ["Library", "Framework"], answer: "Library" },
];

const Quiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selected: string) => {
    if (selected === quizData[current].answer) setScore(score + 1);
    setCurrent(current + 1);
  };

  if (current >= quizData.length) return (
    <div>
      <h2>Your score: {score}/{quizData.length}</h2>
      <button onClick={() => { setCurrent(0); setScore(0); }}>Restart Quiz</button>
    </div>
  );

  return <Question {...quizData[current]} onAnswer={handleAnswer} />;
};

export default Quiz;
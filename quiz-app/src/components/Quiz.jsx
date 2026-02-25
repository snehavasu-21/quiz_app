import { useState, useEffect } from "react";
import Question from "./Question";

const questionPool = [
  { question: "2 + 2 = ?", options: ["3", "4"], answer: "4" },
  { question: "Capital of India?", options: ["Delhi", "Mumbai"], answer: "Delhi" },
  { question: "React is a ___?", options: ["Library", "Framework"], answer: "Library" },
  { question: "5 * 6 = ?", options: ["30", "20"], answer: "30" },
  { question: "HTML stands for?", options: ["HyperText Markup Language", "HighText Machine Language"], answer: "HyperText Markup Language" }
];

// Shuffle function (JavaScript version)
function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Get random questions
function getRandomQuestions(pool, number) {
  return shuffleArray(pool).slice(0, number);
}

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(getRandomQuestions(questionPool, 3)); // Pick 3 random questions
  }, []);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
  };

  if (questions.length === 0) return <p>Loading...</p>;

  if (current >= questions.length) {
    return (
      <div>
        <h2>Your score: {score}/{questions.length}</h2>
        <button
          onClick={() => {
            setScore(0);
            setCurrent(0);
            setQuestions(getRandomQuestions(questionPool, 3));
          }}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <Question
      question={questions[current].question}
      options={questions[current].options}
      onAnswer={handleAnswer}
    />
  );
}
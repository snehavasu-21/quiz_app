import { useState } from "react";
import "./App.css";

type Question = {
  question: string;
  options: string[];
  answer: number;
};

const questions: Question[] = [
  {
    question: "Which language runs in a browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cars SUVs Sailboats",
      "Computer Style Sheets",
    ],
    answer: 1,
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HyperText Machine Language",
      "HyperTool Markup Language",
      "None",
    ],
    answer: 0,
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    answer: 1,
  },
  {
    question: "Which hook is used for state?",
    options: ["useFetch", "useState", "useEffect", "useData"],
    answer: 1,
  },
  {
    question: "Inside which HTML element do we put JS?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: 2,
  },
  {
    question: "Which symbol is used for comments in JS?",
    options: ["//", "##", "<!-- -->", "**"],
    answer: 0,
  },
  {
    question: "Which method converts JSON to object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "parse.JSON()"],
    answer: 0,
  },
  {
    question: "Which CSS property controls text size?",
    options: ["font-size", "text-style", "font-style", "size"],
    answer: 0,
  },
  {
    question: "Which company developed TypeScript?",
    options: ["Google", "Microsoft", "Meta", "Amazon"],
    answer: 1,
  },
  {
    question: "React is mainly used for?",
    options: ["Database", "UI", "Backend", "Networking"],
    answer: 1,
  },
  {
    question: "Which hook runs after render?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    answer: 1,
  },
  {
    question: "Which keyword declares constant?",
    options: ["var", "let", "const", "constant"],
    answer: 2,
  },
  {
    question: "Which array method loops?",
    options: ["map()", "loop()", "each()", "forEach()"],
    answer: 3,
  },
  {
    question: "Which is not a JS framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: 3,
  },
  {
    question: "Which HTML tag for image?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    answer: 1,
  },
  {
    question: "Which property for flex layout?",
    options: ["display:flex", "flexbox", "layout:flex", "position:flex"],
    answer: 0,
  },
  {
    question: "Which hook stores reference?",
    options: ["useRef", "useStore", "useMemo", "useCall"],
    answer: 0,
  },
  {
    question: "Which operator compares value & type?",
    options: ["==", "=", "===", "!="],
    answer: 2,
  },
  {
    question: "Which function delays execution?",
    options: ["setDelay", "setTimeout", "delay()", "wait()"],
    answer: 1,
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    setSelected(index);
    if (index === questions[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
  };

  return (
    <div className="app">
      <div className="quiz-card">

        <h1>🚀 React Quiz</h1>

        {showResult ? (
          <div className="result">
            <h2>Your Score</h2>
            <p>
              {score} / {questions.length}
            </p>
            <button onClick={restartQuiz}>Restart</button>
          </div>
        ) : (
          <>
            <div className="question">
              {current + 1}. {questions[current].question}
            </div>

            <div className="options">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  className={`option ${
                    selected === i
                      ? i === questions[current].answer
                        ? "correct"
                        : "wrong"
                      : ""
                  }`}
                  onClick={() => handleAnswer(i)}
                  disabled={selected !== null}
                >
                  {opt}
                </button>
              ))}
            </div>

            <button
              className="next-btn"
              onClick={nextQuestion}
              disabled={selected === null}
            >
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
}
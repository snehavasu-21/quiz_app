export default function Question({ question, options, onAnswer }) {
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
}
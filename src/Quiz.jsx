// src/Quiz.js
import React, { useState } from "react";
import { quizData } from "./data";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz finished! Your score is ${score + 1}`);
    }
  };

  return (
    <div class="min-h-screen flex items-center justify-center">
      <div>
        <h2>{quizData[currentQuestion].question}</h2>
        <br />
        {quizData[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {option}
            </label>
          </div>
        ))}
            <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>{" "}
    </div>
  );
};

export default Quiz;

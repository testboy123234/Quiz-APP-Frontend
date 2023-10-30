import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const getQuizData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/quizzes");
        if (response.status === 200) {
          setQuizData(response.data.data);
        }
      } catch (error) {
        console.error("error", error);
      }
    };

    getQuizData();
  }, []);

  const handleSubmit = () => {
    if (quizData[currentQuestion] && selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz finished! Your score is ${score}`);
    }
  };

  // Check if quizData and quizData[currentQuestion] are defined before rendering.
  if (!quizData || !quizData[currentQuestion]) {
   // console.log(quizData);
    console.log(quizData[currentQuestion]);
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" px-5 py-6 border border-gray-300 rounded-lg text-gray-700">
        <h2>{quizData[currentQuestion].question}</h2>
        <br />
        {quizData[currentQuestion].options.map((option, index) => (
          <div key={index} className="mb-3 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-300 hover:border-gray-400 transition-transform hover:scale-105">
            <label >
              <input className=" mr-5"
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {option}
            </label>
          </div>
        ))}
       
        <button className="ml-1 mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md transition-transform hover:scale-105" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Quiz;

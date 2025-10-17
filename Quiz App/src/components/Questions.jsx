import React, { useEffect, useState } from "react";
import que from "../assets/que.json";
import Result from "./Result";

const Questions = ({ isOver, setisOver, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const question = que[currentIndex];

  const handleOptionClick = (option) => {
    if (option === question.answer) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentIndex < que.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setisOver(true);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto my-10 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-3xl">
      <div className="text-white text-lg font-semibold mb-4 flex justify-between items-center">
        <span>Question {currentIndex + 1} of {que.length}</span>
        <span className="text-yellow-300 text-2xl">💡</span>
      </div>
      <h2 className="text-3xl font-bold text-white mb-8 leading-relaxed text-center">{question.question}</h2>
      <div className="flex flex-col gap-5">
        {question.options.map((option) => (
          <button
            onClick={() => handleOptionClick(option)}
            key={option}
            className={`bg-white text-gray-800 font-semibold py-4 px-6 rounded-xl shadow-md hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1 active:scale-95 text-lg`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;

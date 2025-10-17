import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Questions from "./components/Questions";
import Result from "./components/Result";

function App() {
  // State to manage if the quiz is over
  const [isOver, setisOver] = useState(false);
  // State to store the user's score
  const [score, setScore] = useState(0);

  return (
    <>
      <h1 className="capitalize text-4xl font-bold text-center my-8 text-blue-600">
        Quiz App
      </h1>
      {isOver ? (
        <Result score={score} />
      ) : (
        <div>
          <Timer setisOver={setisOver} isOver={isOver} />
          <Questions
            setisOver={setisOver}
            isOver={isOver}
            setScore={setScore}
          />
        </div>
      )}
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
      >
        Restart Quiz
      </button>
    </>
  );
}

export default App;

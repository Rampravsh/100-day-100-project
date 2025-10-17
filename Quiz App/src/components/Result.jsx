import React from "react";

const Result = ({ score }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-purple-600 to-indigo-800 text-white rounded-3xl shadow-2xl p-8 m-4 animate-fade-in-up">
      <h2 className="text-5xl font-extrabold mb-6 text-center leading-tight tracking-wide drop-shadow-lg">
        🎉 Quiz Completed! 🎉
      </h2>
      <p className="text-3xl font-semibold mb-8 text-center opacity-90">
        Your final score is:
      </p>
      <div className="relative flex items-center justify-center w-48 h-48 rounded-full bg-white bg-opacity-10 border-4 border-white border-opacity-30 shadow-inner-lg animate-pulse-slow">
        <span className="absolute text-8xl font-bold text-yellow-300 drop-shadow-xl animate-bounce-once">
          {score}
        </span>
      </div>
      <p className="mt-8 text-xl text-center opacity-80">
        Great job! You've done well.
      </p>
    </div>
  );
};
export default Result;

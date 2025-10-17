import React, { useEffect, useState } from "react";

const Timer = ({ setisOver, isOver }) => {
  const [leftTime, setleftTime] = useState(100);
  const [displayTime, setdisplayTime] = useState("");

  useEffect(() => {
    if (isOver) {
      setleftTime(0);
    }
    if (leftTime <= 0) {
      return;
    }

    const timerId = setInterval(() => {
      setleftTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [leftTime]);

  useEffect(() => {
    if (leftTime === 0) {
      setisOver(true);
    }
    let formatedTime = `${Math.floor(leftTime / 60)
      .toString()
      .padStart(2, 0)}:${(leftTime % 60).toString().padStart(2, 0)}
        `;
    setdisplayTime(formatedTime);
  }, [leftTime]);

  return (
    <div className="relative flex items-center justify-center text-center text-3xl font-extrabold my-6 p-6 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 text-white rounded-2xl shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-1 focus:outline-none focus:ring-4 focus:ring-purple-300 animate-pulse-slow">
      <span className="absolute -top-4 -left-4 text-6xl opacity-20 transform rotate-12">⏳</span>
      <span className="relative z-10 tracking-wide">Time Left: <span className="text-yellow-300 drop-shadow-lg">{displayTime}</span> Sec</span>
      <span className="absolute -bottom-4 -right-4 text-6xl opacity-20 transform -rotate-12">⏰</span>
    </div>
  );
};

export default Timer;

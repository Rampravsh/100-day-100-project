import React, { useEffect, useState } from "react";

const Timer = () => {
  const [leftTime, setleftTime] = useState(5);
  const [displayTime, setdisplayTime] = useState("");

  useEffect(() => {
    if (leftTime <= 0) {
      return;
    }

    const timerId = setInterval(() => {
      setleftTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [leftTime]);

  useEffect(() => {
    let formatedTime = `${Math.floor(leftTime / 60)
      .toString()
      .padStart(2, 0)}:${(leftTime % 60).toString().padStart(2, 0)}
        `;
    setdisplayTime(formatedTime);
  }, [leftTime]);

  return (
    <div>
      <span>⏳</span> Time Left : {displayTime} Sec
    </div>
  );
};

export default Timer;

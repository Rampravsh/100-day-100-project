import React from "react";
import que from "../assets/que.json";

const Questions = () => {
  return (
    <div>
      {que.map((item) => (
        <li key={item.id}>{item.question}</li> // Assuming 'item' has a unique 'id'
      ))}
    </div>
  );
};

export default Questions;

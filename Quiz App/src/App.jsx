import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Questions from "./components/Questions";

function App() {
  return (
    <>
      <h1 className="capitalize">hello world!</h1>
      <Timer />
      <Questions />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import SqureBox from "./components/SqureBox";

function App() {
  const [color, setcolor] = useState("");
  const changeColor = (name) => {
    setcolor(name);
  };

  return (
    <>
      <h1>hello world!{}</h1>
      <div className="buttons-con">
        <Buttons colorName={"blue"} fnc={changeColor} />
        <Buttons colorName={"red"} fnc={changeColor} />
        <Buttons colorName={"orange"} fnc={changeColor} />
        <Buttons colorName={"green"} fnc={changeColor} />
        <Buttons colorName={"purple"} fnc={changeColor} />
        <Buttons colorName={"gray"} fnc={changeColor} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <SqureBox color={color}/>
      </div>
    </>
  );
}

export default App;

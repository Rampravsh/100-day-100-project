import { useState } from "react";
import "./App.css";
import Box from "./Box";
import BtnForAll from "./BtnForAll.jsx";

function App() {
  const [display, setDisplay] = useState(false);
  const [type, setType] = useState("");
  return (
    <>
      {display ? (
        <Box type={type} setDisplay={setDisplay} />
      ) : (
        <BtnForAll setDisplay={setDisplay} setType={setType} />
      )}
    </>
  );
}

export default App;

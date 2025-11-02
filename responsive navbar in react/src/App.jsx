import { useState } from "react";
import "./App.css";
import logo from "./assets/react.svg";
import { MdOutlineMenuOpen } from "react-icons/md";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      {/* navbar for big screen */}
      <div className="flex justify-between p-4 bg-green-100">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-4 max-sm:hidden text-xl">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
        </div>
        <div
          onClick={() => setMobileMenu((prev) => !prev)}
          className="sm:hidden text-2xl cursor-pointer"
        >
          <MdOutlineMenuOpen />
        </div>
      </div>
      <div
        className={`flex flex-col bg-green-200 p-10 gap-4 h-screen absolute top-0 left-0 w-56 text-xl transition duration-300 ${
          mobileMenu ? "translate-x" : "-translate-x-full"
        } `}
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </div>
    </>
  );
}

export default App;

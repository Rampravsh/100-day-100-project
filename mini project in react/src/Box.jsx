import React, { useState } from "react";

const Box = ({ type, setDisplay }) => {
  return (
    <>
      <div className="full-screen-element">
        <button
          onClick={() => setDisplay(false)}
          style={{ position: "fixed", top: "10px", right: "10px" }}
        >
          ❌
        </button>
        <div
          style={{
            border: "2px white solid",
            backgroundColor: "blue",
            padding: "20px",
            borderRadius: "10px",
            display: `flex`,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height:'200px'
          }}
        >
          <div style={{ fontSize: "20px", textAlign: "center" }}>
            🚧 {type} 🚧{" "}
          </div>
          <p>Are you sure you want to {type.toLowerCase()} this?</p>
          <div>
            <button style={{ backgroundColor: "red", marginRight: "10px" }}>
              No
            </button>
            <button style={{ backgroundColor: "green" }}>Yes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;

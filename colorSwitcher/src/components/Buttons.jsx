import React from "react";

const Buttons = (props) => {
  const colorName = props.colorName;
  return (
    <button
      onClick={() => {
        props.fnc(colorName);
      }}
      style={{ backgroundColor: `${colorName}` }}
    >
      {colorName}
    </button>
  );
};

export default Buttons;

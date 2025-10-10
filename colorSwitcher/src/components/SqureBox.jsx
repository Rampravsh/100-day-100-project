import React from "react";

const SqureBox = (props) => {
  return (
    <div className="SqureBox" style={{ backgroundColor: `${props.color}` }}>
      {props.color}
    </div>
  );
};

export default SqureBox;

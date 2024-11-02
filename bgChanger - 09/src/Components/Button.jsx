import React from "react";

function Button({ setColor, colorEnter, bgcolor, text }) {
  return (
    <button
      onClick={() => {
        setColor(colorEnter);
      }}
      className={`outline-none px-4 py-1 rounded-full shadow-lg  ${bgcolor}`}
    >
      {text}
    </button>
  );
}

export default Button;

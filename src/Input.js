import React from "react";
import colorNames from "colornames";

function Input({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="">Add Color Name</label>
      <input
        type="text"
        autoFocus
        placeholder="enter color name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        toogle text color
      </button>
    </form>
  );
}

export default Input;

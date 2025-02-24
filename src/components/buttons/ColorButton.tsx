import React, { useState } from "react";

// interface validate input at compile time
interface ColorButtonProps {
  text: string;
}

// functional component
const ColorButton: React.FC<ColorButtonProps> = ({ text }) => {
  const [color, setColor] = useState<string>("blue"); // Initial color set to blue

  const handleClick = () => {
    const newColor = color === "blue" ? "green" : "blue";
    setColor(newColor);
  };

  const buttonStyle = {
    backgroundColor: color,
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
};

export default ColorButton;

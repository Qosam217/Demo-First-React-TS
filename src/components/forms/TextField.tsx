import { useRef } from "react";

export const TextField = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="click to focus" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
};

import { useRef } from "react";

export const Focus: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  //console.log("inputRef-->", inputRef);
  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

import { useState, useRef, useEffect } from "react";

export const CountRenders = () => {
  const [value, setValue] = useState("");
  const count = 1;
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + count;
    // console.log("render--->", renderCount);
  });

  return (
    <>
      <h2>useRef</h2>

      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />

      <p>{value}</p>
      <p>I have rendered {renderCount.current} times</p>
    </>
  );
};

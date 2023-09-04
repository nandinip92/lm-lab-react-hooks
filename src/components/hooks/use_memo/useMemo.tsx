import { useMemo, useState } from "react";

export const MemoExample = () => {
  console.log("Rendering component...");

  const [numberObj, setNumberObj] = useState({ input: 0 });

  // const doubleNumber = slowFunction(numberObj.input)
  const doubleNumber = useMemo(
    () => slowFunction(numberObj.input),
    [numberObj.input]
  );

  const [num, setNum] = useState<number>(0);
  const doubleNumber2 = useMemo(() => slowFunction(num), [num]);

  return (
    <>
      <h2>useMemo</h2>

      <button onClick={() => setNumberObj({ input: 5 })}>Double 5</button>

      <p className="use-memo__text">{doubleNumber}</p>

      <button onClick={() => setNum(() => num + 1)}>Double {num}</button>

      <p className="use-memo__text">{doubleNumber2}</p>
    </>
  );
};

function slowFunction(num: number) {
  console.log("calling slow function... 🐌");
  for (let i = 0; i <= 1000000000; i++) {
    // ⏰
  }
  const result = num * 2;
  console.log(`result: ${result}`);
  return result;
}

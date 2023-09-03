import { useState } from "react";

export function CountCats() {
  //const cats = ["🐈"].length;

  const [cats, setCats] = useState<Array<string>>(["🐈"]);

  const addCat = () => {
    setCats([...cats, "🐈"]);
  };
  return (
    <>
      <h2>useState</h2>

      <p>{cats}</p>

      <button onClick={addCat}>There are {cats.length} cats 🥳</button>
    </>
  );
}

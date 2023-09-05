import { useState, createContext, useContext } from "react";
import { Child1 } from "./child_1";
import { Child2 } from "./child_2";

interface Theme {
  backgroundColor: string;
  color: string;
  padding: string;
  margin: string;
}

export const ThemeContext = createContext<Theme>({
  backgroundColor: "",
  color: "",
  padding: "",
  margin: "",
});

export const Parent = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const theme: Theme = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "white" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <div className="section">
      <h2>useContext</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemeContext.Provider value={theme}>
        <Child1 />
        <Child2 />
      </ThemeContext.Provider>
    </div>
  );
};

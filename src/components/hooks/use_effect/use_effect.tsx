// make an api call using useEffect
import { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export const APICall = () => {
  // Your code here!
  const [json, setJson] = useState<Todo | null>(null);

  const fetchTodo = async (url: string) => {
    try {
      const response = await fetch(url);
      const apiJson = await response.json();
      setJson(apiJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    fetchTodo(url);
  }, []);

  //   console.log("******");
  //   if (json !== null)
  //     Object.entries(json).map(([key, value]) => console.log(key + ": " + value));

  return (
    <>
      <h2>useEffect</h2>
      {json !== null &&
        Object.entries(json).map(([key, value]) => (
          <p key={key}>
            {key}: {typeof value === "boolean" ? value.toString() : value}
          </p>
        ))}
      <p>{json !== null && json.completed}</p>
    </>
  );
};

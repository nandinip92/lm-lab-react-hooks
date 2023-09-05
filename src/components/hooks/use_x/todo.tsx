import useTodo from "./use_todo";

/** This is the response that TypiCode gives for the /todos/ endpoint */
interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const Todo = () => {
  const { data, isFetching } = useTodo(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return (
    <>
      <h2>Custom Hook</h2>

      {isFetching ? <p>Fetching...</p> : <p>{data?.title}</p>}
    </>
  );
};

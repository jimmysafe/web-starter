import { useGetTodosQuery } from "../../generated/graphql";
import Todo, { TodoItem } from "./Todo";

const Todos = () => {
  const [{ data, fetching }] = useGetTodosQuery();

  if (fetching) return <p>Loading</p>;

  const todos = data?.todos?.map((todo) => todo) as TodoItem[];

  return (
    <div className="flex flex-col container mx-auto mt-10">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;

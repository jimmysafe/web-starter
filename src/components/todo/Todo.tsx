type TodoProps = {
  todo: TodoItem;
};

export type TodoItem = {
  done: boolean;
  id: string;
  description: string;
};

const Todo = ({ todo }: TodoProps) => {
  return (
    <div className="p-4 mb-2 rounded border border-white flex justify-between items-center">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
        enim tempore ipsa, quo mollitia eius totam vitae, neque aliquid optio
        ratione? Delectus sint dolores soluta quos ut eius, repellendus officia
        similique libero recusandae unde magnam dolorum, doloribus maxime, vel
        quia cupiditate incidunt ullam error? Totam dolorem placeat illo porro
        in optio! Placeat inventore doloremque dolorum pariatur accusantium
        quaerat nihil quidem beatae! Laudantium, fugiat at dignissimos velit
        aliquid esse deleniti, perferendis vitae sapiente, consequatur
        voluptates officiis reiciendis cupiditate cumque itaque consectetur
        temporibus ex? Vero architecto ullam ipsa! Inventore quas enim illum,
        quasi sed autem vel omnis eligendi? Doloremque animi facere ex?
      </p>
      <div className="flex-1">
        <p>{todo.description}</p>
      </div>
      <div>{todo.done ? <p>V</p> : <p>X</p>}</div>
    </div>
  );
};

export default Todo;

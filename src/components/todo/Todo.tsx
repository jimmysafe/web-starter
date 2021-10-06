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
            <div className="flex-1">
                <p>{todo.description}</p>
            </div>
            <div>{todo.done ? <p>V</p> : <p>X</p>}</div>
        </div>
    );
};

export default Todo;

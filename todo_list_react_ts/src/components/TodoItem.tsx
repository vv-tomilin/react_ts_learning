import { ITodo } from "../types/data";

interface ITodoItemProps extends ITodo {
  removeTodoItem: (id: number) => void;
  toggleTodoItem: (id: number) => void;
};

const TodoItem: React.FC<ITodoItemProps> = (props) => {

  const { id, title, completed, removeTodoItem, toggleTodoItem } = props;

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoItem(id)} />
      {title}
      <button onClick={() => removeTodoItem(id)}>x</button>
    </div>
  );
};

export default TodoItem;
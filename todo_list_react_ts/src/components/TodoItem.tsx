import { ITodo } from "../types/data";

interface ITodoItemProps extends ITodo { };

const TodoItem: React.FC<ITodoItemProps> = (props) => {

  const { id, title, completed } = props;

  return (
    <div>
      <input type="checkbox" checked={completed} />
      {title}
      <button>x</button>
    </div>
  );
};

export default TodoItem;
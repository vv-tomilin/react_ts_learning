import TodoItem from "./TodoItem";

import { ITodo } from "../types/data";

interface ITodoListProps {
  items: ITodo[];
  removeTodoItem: (id: number) => void;
  toggleTodoItem: (id: number) => void;
};

const TodoList: React.FC<ITodoListProps> = (props) => {

  const { items, removeTodoItem, toggleTodoItem } = props;

  return (
    <div>
      {
        items.map(item => (
          <TodoItem
            removeTodoItem={removeTodoItem}
            toggleTodoItem={toggleTodoItem}
            key={item.id}
            {...item} />
        ))
      }
    </div>
  );
};

export default TodoList;
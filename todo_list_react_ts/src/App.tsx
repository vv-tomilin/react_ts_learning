import { useState, useEffect, useRef } from 'react';

import TodoList from './components/TodoList';

import { ITodo } from './types/data';

const App: React.FC = () => {

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const inputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const inputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addTodoItem();
  };

  const addTodoItem = () => {

    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          completed: false
        }
      ]);
      setValue('');
    }
  };

  const removeTodoItem = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };

  const toggleTodoItem = (id: number): void => {
    setTodos(todos.map((todo) => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        completed: !todo.completed
      };
    }));
  };

  useEffect(() => {

    //* установка курсора в поле input
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <div>
        <input
          value={value}
          onChange={inputChange}
          onKeyDown={inputKeyDown}
          ref={inputRef} />
        <button onClick={addTodoItem}>Add</button>
      </div>
      <TodoList
        items={todos}
        removeTodoItem={removeTodoItem}
        toggleTodoItem={toggleTodoItem} />
    </div>
  );
}

export default App;

import { useState, useEffect, useRef } from 'react';

import TodoList from './components/TodoList';

import { ITodo } from './types/data';

const App: React.FC = () => {

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const addTodoItem: React.MouseEventHandler<HTMLButtonElement> = (e) => {

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

  return (
    <div>
      <div>
        <input value={value} onChange={inputChange} />
        <button onClick={addTodoItem}>Add</button>
      </div>
      <TodoList items={todos} />
    </div>
  );
}

export default App;

import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { ITodo } from '../types/types';

const TodoItemPage: FC = () => {

  const [todo, setTodo] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')

      setTodo(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div></div>
  );
};

export default TodoItemPage;
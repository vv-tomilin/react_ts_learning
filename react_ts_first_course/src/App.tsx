import { FC } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import ExamplesPage from './components/ExamplesPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App: FC = () => {

  return (
    <Router>
      <div>
        <div style={{ marginBottom: 45 }}>
          <div>
            <NavLink to='/users'>Пользователи</NavLink>
          </div>
          <div>
            <NavLink to='/todos'>Список дел</NavLink>
          </div>
          <div>
            <NavLink to='/examples'>Прочее</NavLink>
          </div>
        </div>

        <Route exact path={'/users'}>
          <UserPage />
        </Route>
        <Route exact path={'/todos'}>
          <TodosPage />
        </Route>
        <Route exact path={'/examples'}>
          <ExamplesPage />
        </Route>
        <Route path={'/users/:id'}>
          <UserItemPage />
        </Route>
        <Route path={'/todos/:id'}>
          <TodoItemPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;

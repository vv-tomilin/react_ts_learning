import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {

  const users: IUser[] = [
    { id: 1, name: 'Bob', email: 'email.bob@email.com', address: { city: 'London', street: 'BrowRoad 456', zipcode: '456879' } },
    { id: 2, name: 'Lena', email: 'email.lena@email.com', address: { city: 'Moscow', street: 'Frunze', zipcode: '112354' } }
  ];

  return (
    <div>
      <Card
        width='150px'
        height='150px'
        variant={CardVariant.outlined}
        onClick={() => console.log('click')}>
        <button>Button</button>
      </Card>
      <UserList
        users={users} />
    </div>
  );
}

export default App;

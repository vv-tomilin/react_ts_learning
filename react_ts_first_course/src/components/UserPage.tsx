import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import List from './List';
import UserItem from './UserItem';

import { IUser } from '../types/types';

const UserPage: FC = () => {

  const [users, setUsers] = useState<IUser[]>([]);

  const history = useHistory();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')

      setUsers(response.data);
    }
    catch (err) {
      console.log(err);

    }
  }

  return (
    <div>
      <List
        items={users}
        renderItem={(user: IUser) =>
          <UserItem
            onClick={(user) => history.push('/users/' + user.id)}
            user={user}
            key={user.id} />}
      />
    </div>
  );
};

export default UserPage;
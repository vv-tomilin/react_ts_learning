import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

import { IUser } from '../types/types';

interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {

  const [user, setUser] = useState<IUser | null>(null);

  const params = useParams<UserItemPageParams>();
  const history = useHistory();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)

      setUser(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <button onClick={() => history.push('/users')}>Back</button>
      <h1>Страница пользователя <span style={{ fontWeight: 700, textDecoration: 'underline' }}>{user?.name}</span></h1>
      <div>
        <p>Email: <span style={{ fontWeight: 700, textDecoration: 'underline' }}>{user?.email}</span></p>
        <div>
          <p>City: {user?.address.city}</p>
          <p>Street: {user?.address.street}</p>
          <p>Zip code: {user?.address.zipcode}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItemPage;
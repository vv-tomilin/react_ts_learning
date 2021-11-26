import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserListProps {
  users: IUser[];

};

const UserList: FC<UserListProps> = ({ users }) => {

  return (
    <div>
      {users && users.map((user) => (
        <div
          style={{ padding: 25, border: '1px solid blue' }}
          key={user.id}
        >
          {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
      ))}

      List
    </div >
  );
};

export default UserList;
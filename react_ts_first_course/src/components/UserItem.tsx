import { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemPropos {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemPropos> = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      style={{ padding: 25, border: '1px solid blue' }}>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
    </div>
  );
};

export default UserItem;
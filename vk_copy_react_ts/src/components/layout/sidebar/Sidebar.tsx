import React from 'react';

import UserItem from './UserItems';
import Menu from './Menu';

const Sidebar: React.FC = () => {
  return (
    <div>
      <UserItem />
      <Menu />
    </div>
  )
};

export default Sidebar;
import * as Icons from '@mui/icons-material';
import { IMenuItem } from '../../../types/types';

export const dataMenu: IMenuItem[] = [
  {
    title: 'Моя страница',
    link: '/profile',
    icon: Icons.Home
  },
  {
    title: 'Друзья',
    link: '/friends',
    icon: Icons.People
  },
  {
    title: 'Новости',
    link: '/',
    icon: Icons.Newspaper
  },
];
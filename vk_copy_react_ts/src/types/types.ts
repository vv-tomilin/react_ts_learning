import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Auth } from 'firebase/auth';
import { Dispatch, SetStateAction } from 'react';

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export interface IUser {
  id: string,
  avatar: string,
  name: string,
  isOnline?: boolean
}

export interface IPost {
  author: IUser,
  createdAt: string,
  content: string,
  images?: string[]
}

export interface IMenuItem {
  title: string,
  link: string
  icon: OverridableComponent<SvgIconTypeMap>
}

export interface IUserData {
  email: string,
  password: string
}

export interface IContext {
  user: IUser | null,
  setUser: TypeSetState<IUser | null>,
  getauth: Auth
}
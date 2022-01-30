import React, { SyntheticEvent, useState } from 'react';

import { Button, ButtonGroup, TextField } from '@mui/material';

import { IUserData } from '../../../types/types';

const Auth: React.FC = () => {

  const [isRegForm, setIsRegForm] = useState<boolean>(false);

  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: ''
  } as IUserData);

  const loginHandle = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isRegForm) {
      console.log('register');
    } else {
      console.log('auth');

    }

    console.log(userData.email, userData.password);

  };

  return (
    <form
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onSubmit={loginHandle}>
      <TextField
        sx={{
          display: 'block',
          marginBottom: '15px',
        }}
        type='email'
        label='Email'
        variant='outlined'
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
      <TextField
        sx={{
          display: 'block',
          marginBottom: '15px',
        }}
        type='password'
        label='Password'
        variant='outlined'
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
      <ButtonGroup variant='outlined'>
        <Button type='submit' onClick={() => setIsRegForm(false)}>Auth</Button>
        <Button type='submit' onClick={() => setIsRegForm(true)}>Register</Button>
      </ButtonGroup>
    </form>
  );
};

export default Auth;

import React, { SyntheticEvent, useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { Alert, Button, ButtonGroup, TextField } from '@mui/material';

import { IUserData } from '../../../types/types';

const Auth: React.FC = () => {

  const { getauth } = useAuth();

  const [error, setError] = useState('');
  const [isRegForm, setIsRegForm] = useState<boolean>(false);

  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: ''
  } as IUserData);

  const loginHandle = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isRegForm) {
      try {
        await createUserWithEmailAndPassword(
          getauth,
          userData.email,
          userData.password
        );

      } catch (error: any) {
        error.message && setError(error.message);
      }
    } else {

      try {
        await signInWithEmailAndPassword(
          getauth,
          userData.email,
          userData.password
        );

      } catch (error: any) {
        error.message && setError(error.message);
      }
    }
    setUserData({
      email: '',
      password: ''
    });
  };

  const history = useHistory()

  useEffect(() => {
    if (!userData) {
      history.push('/')
    }
  }, [userData]);

  return (
    <>
      {error && <Alert severity='error'>{error}</Alert>}
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
    </>
  );
};

export default Auth;

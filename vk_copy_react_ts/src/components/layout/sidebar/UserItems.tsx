import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import {
  Box,
  Card,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material/';
import { QuestionAnswer } from '@mui/icons-material';

const users = [
  {
    id: 1,
    avatar: 'https://www.picgifs.com/avatars/avatars/humor/avatars-humor-159641.jpg',
    name: 'Петя Пупкин',
    isOnline: true
  },
  {
    id: 2,
    avatar: 'https://hostinpl.ru/uploads/fotos/foto_4736.jpg',
    name: 'Вован Стакан',
    isOnline: true
  },
  {
    id: 3,
    avatar: 'http://ru.avatarstock.com/img/Mr-Mackey-mmkay_19199.jpg',
    name: 'Полиграф Полиграфыч',
    isOnline: false
  },
  {
    id: 4,
    avatar: 'https://static.tildacdn.com/tild6538-3663-4761-a236-643739396433/photo_2021-02-04_19-.jpg',
    name: 'Гермафродита Игоревна',
    isOnline: true
  },
];

const UserItems: React.FC = () => {

  const history = useHistory();

  return (
    <>
      <Card
        variant='outlined'
        sx={{
          padding: '8px 5px',
          backgroundColor: '#f6f6f6',
          borderRadius: '8px',
          fontFamily: 'Roboto',
          width: '100%'
        }}>
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/profile/${user.id}`}
            style={{
              position: 'relative',
              textDecoration: 'none',
              color: '#7c7c7c',
              width: 'max-content',
            }}>
            {user.isOnline &&
              <Box sx={{
                backgroundColor: 'green',
                width: 14,
                height: 14,
                position: 'absolute',
                top: '35px',
                left: '38px',
                zIndex: 2,
                borderRadius: '50px',
                border: '3px solid white',
              }}></Box>
            }
            <Box sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: '12px',
              width: '100%'
            }}>
              <Box sx={{
                position: 'relative',
                marginRight: '25px',
                overflow: 'hidden',
                width: 50,
                height: 50
              }}>
                <Avatar
                  src={user.avatar}
                  alt=""
                  sx={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50px',

                  }}
                />
              </Box>
              <span>{user.name}</span>
            </Box>
          </Link>
        ))}

        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => history.push('/messages')}>
              <ListItemIcon>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary='Сообщения' />
            </ListItemButton>
          </ListItem>
        </List>
      </Card>
    </>
  );
};

export default UserItems;
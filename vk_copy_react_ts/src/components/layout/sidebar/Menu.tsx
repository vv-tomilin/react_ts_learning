import React from 'react';

import { useHistory } from 'react-router-dom';

import { dataMenu } from './dataMenu';

import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material/';

const Menu: React.FC = () => {

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
          marginTop: '35px',
          width: '100%'
        }}>

        <List>
          {dataMenu.map((menuItem) => (
            <ListItem key={menuItem.link} disablePadding>
              <ListItemButton onClick={() => history.push(menuItem.link)}>
                <ListItemIcon>
                  <menuItem.icon />
                </ListItemIcon>
                <ListItemText primary={menuItem.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  )
};

export default Menu;
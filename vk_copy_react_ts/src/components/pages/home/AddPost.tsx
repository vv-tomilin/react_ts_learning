import React, { useState } from 'react';

import { TypeSetState, IPost } from '../../../types/types';

import { users } from '../../layout/sidebar/dataUsers';

import { TextField } from '@mui/material';
import { Box } from '@mui/system';

interface IAddPost {
  setPosts: TypeSetState<IPost[]>
}

const AddPost: React.FC<IAddPost> = ({ setPosts }) => {

  const [content, setContent] = useState<string>('');

  const addPostHandler: React.KeyboardEventHandler<HTMLDivElement> =
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        setPosts(prev => [
          {
            author: users[0],
            content,
            createdAt: ' 5 минут назад',
          },
          ...prev
        ])

        setContent('');
      }
    };

  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '6px'
      }}>
      <TextField
        label='Расскажи что нового...'
        variant='outlined'
        InputProps={{
          sx: {
            borderRadius: '25px',
            backgroundColor: '#f8f8f8'
          }
        }}
        sx={{
          width: '100%',
        }}
        onKeyPress={addPostHandler}
        onChange={(e) => setContent(e.target.value)}
        value={content} />
    </Box>
  );
};

export default AddPost;

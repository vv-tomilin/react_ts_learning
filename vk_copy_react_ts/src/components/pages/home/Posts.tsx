import React from 'react';

import { Link } from 'react-router-dom';

import { Box } from '@mui/system';
import { Avatar, ImageList, ImageListItem } from '@mui/material';

import { IPost } from '../../../types/types';

interface IPosts {
  posts: IPost[],
}

const Posts: React.FC<IPosts> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Box
          key={post.createdAt}
          sx={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '6px',
            marginTop: '25px'
          }}>
          <Link
            key={post.author.id}
            to={`/profile/${post.author.id}`}
            style={{
              position: 'relative',
              textDecoration: 'none',
              color: '#7c7c7c',
              width: 'max-content',
            }}>
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
                  src={post.author.avatar}
                  alt=""
                  sx={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50px',

                  }}
                />
              </Box>
              <Box>
                <div>{post.author.name}</div>
                <div style={{ fontSize: '8px' }}>{post.createdAt}</div>
              </Box>
            </Box>
          </Link>

          <p>
            {post.content}
          </p>

          {post.images?.length &&
            <ImageList
              variant='masonry'
              cols={3}
              gap={8}>
              {
                post.images.map((image) => (
                  <ImageListItem key={image}>
                    <img
                      src={image}
                      alt=''
                      loading='lazy' />
                  </ImageListItem>
                ))
              }
            </ImageList>
          }
        </Box>
      ))}
    </>
  );
};

export default Posts;

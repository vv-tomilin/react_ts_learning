import React, { useState } from "react";

import { Box } from "@mui/material";

import { IPost } from "../../../types/types";

import AddPost from "./AddPost";
import Posts from "./Posts";

import { initialPosts } from "./initialPosts";

const Home: React.FC = () => {

  const [posts, setPosts] = useState<IPost[]>(initialPosts);

  return (
    <Box>
      <AddPost setPosts={setPosts} />
      <Posts posts={posts} />
    </Box>
  );
};

export default Home;
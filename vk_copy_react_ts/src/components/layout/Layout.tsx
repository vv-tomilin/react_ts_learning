import React from "react";

import { Grid } from '@mui/material/';

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />

      <Grid container spacing={2} marginX={1} marginTop={2}>
        <Grid item md={3.5}>
          <Sidebar />
        </Grid>
        <Grid item md={8}>
          {children}
        </Grid>
      </Grid>
    </>
  )
};

export default Layout;
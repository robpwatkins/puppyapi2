import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Home } from '@material-ui/icons';

function Header() {
  return (
    <AppBar className="header" position="static" style={{background: "#5f6caf"}}>
      <Toolbar>
        <Home />
        <Typography 
          variant="h5" 
          style={{paddingLeft: '15px'}}>
          Puppy API
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
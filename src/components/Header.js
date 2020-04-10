import React from 'react';
import { AppBar, Toolbar, Typography, deepPurple } from '@material-ui/core';
import { Home } from '@material-ui/icons';

function Header() {
  return (
    <nav>
      <Home style={{paddingLeft: "20px"}}/>
      <Typography 
        variant="h5" 
        style={{paddingLeft: '15px'}}>
        Puppy API
      </Typography>
    </nav>

  )
}

export default Header;
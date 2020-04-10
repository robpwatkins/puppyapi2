import React from 'react';
import { AppBar, Toolbar, Typography, Fab } from '@material-ui/core';
import { Home } from '@material-ui/icons';

function Header() {
  return (
    <nav>
      <Fab size="small" style={{background: "white", color: "#1976d2"}}>
        <Home />
      </Fab>
      <Typography 
        variant="h4" 
        style={{paddingLeft: '15px'}}>
        Puppy API
      </Typography>
    </nav>

  )
}

export default Header;
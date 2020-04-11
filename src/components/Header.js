import React from 'react';
import { AppBar, Toolbar, Typography, Fab } from '@material-ui/core';
import { Pets } from '@material-ui/icons';

function Header() {
  return (
    <header>
      <div className="top-bar"></div>
      <div className="header-box">
        <div className="icon-title">
          <Fab size="small" style={{background: "white", color: "#42A5F5"}}>
            <Pets />
          </Fab>
          <h2>Puppy API</h2>
        </div>
        <nav>
          <ul>
            <li className="home">Home</li>
            <li>Documentation</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>

  )
}

export default Header;
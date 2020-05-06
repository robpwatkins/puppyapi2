import React from 'react';
import { AppBar, Toolbar, Typography, Fab } from '@material-ui/core';
import { Pets, Dehaze } from '@material-ui/icons';

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
          <div className="burger">
            <Dehaze />
          </div>
          <ul>
            <li className="home">Pups</li>
            <li>Login</li>
            <li>Documentation</li>
          </ul>
        </nav>
      </div>
    </header>

  )
}

export default Header;
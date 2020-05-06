import React from 'react';
import { Fab } from '@material-ui/core';
import { Pets, Dehaze } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { checkAuth } from '../checkAuth';
// import cookie from 'cookie';

const Header = () => {
  console.log('Header', document.cookie);
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
            <NavLink exact to="/" activeStyle={{borderBottom: "3px solid white"}}>
              <li className="pups">Pups</li>
            </NavLink>
            {checkAuth() ? (
              <li 
                onClick={() => {
                  document.cookie = "loggedIn=";
                  window.location.replace('/');
                }}
                >Logout
              </li>
            ):(
              <NavLink to="/login">
                <li>Login</li>
              </NavLink>
              )}
          </ul>
        </nav>
      </div>
    </header>

  )
}

export default Header;
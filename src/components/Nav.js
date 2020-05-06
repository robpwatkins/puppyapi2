import React from 'react';
import { Fab } from '@material-ui/core';
import { Pets, Dehaze } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { checkAuth } from '../checkAuth';

const ulStyle = {
  display: "flex",
  height: "100%",
  width: "285px",
  justifyContent: "space-evenly",
  alignItems: "center",
  margin: "0",
  padding: "0",
  fontSize: "18px",
  listStyleType: "none",
}

const aStyle = {
  height: "58px",
  lineHeight:  "61px",
  textAlign: "center",
  width: "25%",
  color: "inherit",
  textDecoration: "none",
}

const pointerStyle = {
  cursor: "pointer"
}

const Header = () => {
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
          <ul style={ulStyle}>
            <NavLink exact to="/" activeStyle={{borderBottom: "3px solid white"}} style={aStyle}>
              <li className="pups">Pups</li>
            </NavLink>
            {checkAuth() &&
              <li style={pointerStyle}>Upload</li>
            }
            {checkAuth() ? (
              <li 
                onClick={() => {
                  document.cookie = "loggedIn=";
                  window.location.replace('/');
                }}
                style={pointerStyle}
                >Logout
              </li>
            ):(
              <NavLink to="/login" style={aStyle}>
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
import React from 'react';
import { Fab } from '@material-ui/core';
import { Pets, Dehaze } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { checkAuth } from '../checkAuth';

const headerStyle = {
  width: "100%",
  height: "65px",
  color: "white",
  textShadow: "1px 2px 2px #1976d2",
  background: "#42a5f5",
  boxShadow: "0px 2px 5px 1px #1976d2",
}

const topBarStyle = {
  width: "100%",
  height: "5px",
  background: "#1976d2",
}

const iconTitleStyle = {
  display: "flex",
  width: "160px",
  height: "90%",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "15px",
}

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


const headerBoxStyle = {
  display: "flex",
  width: "100%",
  height: "90%",
  alignItems: "center",
  justifyContent: "space-between",
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
    <header style={headerStyle}>
      <div style={topBarStyle}></div>
      <div style={headerBoxStyle}>
        <div style={iconTitleStyle}>
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
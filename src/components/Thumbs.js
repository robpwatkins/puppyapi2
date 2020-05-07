import React from 'react';
import { checkAuth } from '../checkAuth';
import Winston from '../img/Bill-thumb.jpg';
import Minnie from '../img/Minnie-thumb.jpg';
import Lady from '../img/Lady-thumb.jpg';
import Blondie from '../img/Blondie-thumb.jpg';
import Brandy from '../img/Brandy-thumb.jpg';
import Sharky from '../img/Sharky-thumb.png';
import Max from '../img/Max-thumb.jpg';
import Heidi from '../img/Heidi-thumb.jpg';
import Libby from '../img/Libby-thumb.jpg';
import Narcissa from '../img/Narcissa-thumb.jpg';
import Claude from '../img/Claude.jpg';
import PupCard from './PupCard';
import { Grid } from '@material-ui/core';

const loggedOutContainerStyle = {
  paddingTop: "10px"
}

const loggedInContainerStyle = {
  background: "#bdbdbd69",
  paddingTop: "20px"
}

const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60%",
  height: "40px",
  margin: "0 auto",
  fontSize: "21px",
  color: "white",
  background: "gray",
  borderRadius: "5px"
}

const gridStyle = {
  width: "100%",
  padding: "10px 16px 0 16px",
  margin: "0",
}

function Thumbs() {
  return (
    <div style={checkAuth() ? loggedInContainerStyle : loggedOutContainerStyle}>
      {checkAuth() && (
        <div style={divStyle}>
        <p>Welcome! Your unique endpoint is puppyapi.com/username</p>
        </div>
      )}
      <Grid className="thumbs" container direction="row" spacing={2} style={gridStyle}>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Winston} name="Winston" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Minnie} name="Minnie" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Lady} name="Lady" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Blondie} name="Blondie" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Brandy} name="Brandy" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Sharky} name="Sharky" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Max} name="Max" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Heidi} name="Heidi" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Libby} name="Libby" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Narcissa} name="Narcissa" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Claude} name="Claude" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Winston} name="Winston" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Minnie} name="Minnie" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Lady} name="Lady" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Blondie} name="Blondie" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Brandy} name="Brandy" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Sharky} name="Sharky" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Max} name="Max" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Heidi} name="Heidi" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Libby} name="Libby" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Narcissa} name="Narcissa" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Claude} name="Claude" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Winston} name="Winston" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Minnie} name="Minnie" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Lady} name="Lady" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Blondie} name="Blondie" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Brandy} name="Brandy" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Sharky} name="Sharky" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Max} name="Max" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Heidi} name="Heidi" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Libby} name="Libby" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Narcissa} name="Narcissa" />
        </Grid>
        <Grid container item xs={4} sm={3} md={2} lg={1}>
          <PupCard pup={Claude} name="Claude" />
        </Grid>
      </Grid>
    </div>
  )
}

export default Thumbs;
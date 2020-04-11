import React from 'react';
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
import PupCard from './PupCard';
import { Grid } from '@material-ui/core';

function Thumbs() {
  return (
    <Grid className="thumbs" container direction="row" wrap spacing={2} style={{padding: "16px"}}>
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
    </Grid>
  )
}

export default Thumbs;
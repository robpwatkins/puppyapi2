import React from 'react';
import Winston from '../img/Bill-thumb.jpg';
import Lady from '../img/Lady-thumb.jpg';
import Minnie from '../img/Minnie-thumb.jpg';
import Blondie from '../img/Blondie-thumb.jpg';
import Brandy from '../img/Brandy-thumb.jpg';
import Sharky from '../img/Sharky-thumb.png';
import Max from '../img/Max-thumb.jpg';
import PupCard from './PupCard';
import { Grid } from '@material-ui/core';

function Thumbs() {
  return (
    <div className="thumbs" style={{display: "flex", flexWrap: "wrap"}}>
      <PupCard pup={Winston} name="Winston" />
      <PupCard pup={Lady} name="Lady" />
      <PupCard pup={Minnie} name="Minnie" />
      <PupCard pup={Blondie} name="Blondie" />
      <PupCard pup={Brandy} name="Brandy" />
      <PupCard pup={Max} name="Max" />
      <PupCard pup={Sharky} name="Sharky" />
    </div>

    // </div>
    // <Grid container spacing={2} style={{padding: "16px"}}>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <PupCard pup={Winston} name="Winston" />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <PupCard pup={Lady} name="Lady" />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <PupCard pup={Minnie} name="Minnie" />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <PupCard pup={Blondie} name="Blondie" />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <PupCard pup={Brandy} name="Brandy" />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <PupCard pup={Max} name="Max" />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <PupCard pup={Sharky} name="Sharky" />
    //   </Grid>
    // </Grid>
  )
}

export default Thumbs;
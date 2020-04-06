import React from 'react';
import PupCard from './PupCard';
import { Grid } from '@material-ui/core';
import Bill from '../img/Bill.JPG';
import Brandy from '../img/Brandy.jpg';
import Lady from '../img/Lady.jpg';
import Blondie from '../img/Blondie.jpg';
import Minnie from '../img/Minnie.jpg';

function Content() {
  return (
    <Grid container>
      <Grid container item xs={8} sm={4}>
        <PupCard pup={Bill} name="Winston"/>
        <PupCard pup={Brandy} name="Brandy"/>
      </Grid>
      <Grid container item xs={8} sm={4}>
        <PupCard pup={Lady} name="Lady"/>
        <PupCard pup={Blondie} name="Blondie"/>
      </Grid>
      <Grid container item xs={8} sm={4}>
        <PupCard pup={Minnie} name="Minnie"/>
        <PupCard pup={Bill} name="Winston"/>
      </Grid>
    </Grid>
    // <Grid 
    //   container justify="center" 
    //   spacing={2}
    //   style={{padding: "25px"}}>
    //   <Grid item xs={8} sm={4}>
    //     <PupCard pup={Bill} name="Winston"/>
    //   </Grid>
    //   <Grid item xs={8} sm={4}>
    //     <PupCard pup={Brandy} name="Brandy"/>
    //   </Grid>
    //   <Grid item xs={8} sm={4}>
    //     <PupCard pup={Lady} name="Lady"/>
    //   </Grid>
    //   <Grid item xs={8} sm={4}>
    //     <PupCard pup={Blondie} name="Blondie"/>
    //   </Grid>
    //   <Grid item xs={8} sm={4}>
    //     <PupCard pup={Minnie} name="Minnie"/>
    //   </Grid>
    //       <Grid item xs={8} sm={4}>
    //     <PupCard pup={Bill} name="Winston"/>
    //   </Grid>
    // </Grid>
  )
}

export default Content;
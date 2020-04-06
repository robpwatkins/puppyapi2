import React from 'react';
import PupCard from './PupCard';
import { Grid } from '@material-ui/core';

function Content() {
  return (
    <Grid 
      container justify="center" 
      spacing={2}
      style={{padding: "25px"}}>
      <Grid item xs={8} sm={4}>
        <PupCard />
      </Grid>
      <Grid item xs={8} sm={4}>
        <PupCard />
      </Grid>
      <Grid item xs={8} sm={4}>
        <PupCard />
      </Grid>
      <Grid item xs={8} sm={4}>
        <PupCard />
      </Grid>
      <Grid item xs={8} sm={4}>
        <PupCard />
      </Grid>
      <Grid item xs={8} sm={4}>
        <PupCard />
      </Grid>
    </Grid>
  )
}

export default Content;
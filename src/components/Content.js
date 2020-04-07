import React from 'react';
import PupCard from './PupCard';
import { Grid } from '@material-ui/core';
import Bill from '../img/Bill.JPG';
import Brandy from '../img/Brandy.jpg';
import Lady from '../img/Lady.jpg';
import Blondie from '../img/Blondie.jpg';
import Minnie from '../img/Minnie.jpg';
import Sharky from '../img/Sharky.png';
import PuppyPic from './PuppyPic';

function Content() {
  return (
    <div className="row">
      <div className="column column1">
        <PuppyPic pup={Bill} name="Winston"/>
        <PuppyPic pup={Brandy} name="Brandy" />
      </div>
      <div className="column">
        <PuppyPic pup={Minnie} name="Minnie"/>
        <PuppyPic pup={Blondie} name="Blondie" />
      </div>
      <div className="column column1">
        <PuppyPic pup={Lady} name="Lady"/>
        <PuppyPic pup={Sharky} name="Sharky" />
      </div>
      <div className="column">
        <PuppyPic pup={Bill} name="Winston"/>
        <PuppyPic pup={Brandy} name="Brandy" />
      </div>
    </div>







    // <Grid 
    //   container 
    //   // justify="center"
    //   direction="row"
    //   wrap 
    //   // spacing={2}
    //   justify="space-evenly"
    //   style={{paddingTop: "16px"}}
    //   >
    //   <Grid 
    //     container 
    //     item 
    //     direction="column" 
    //     spacing={2}
    //     xs={12} 
    //     sm={6}
    //     md={3}>
    //     <Grid item>
    //       <PupCard pup={Bill} name="Winston"/>
    //     </Grid>
    //     <Grid item>
    //       <PupCard pup={Blondie} name="Bondie" />
    //     </Grid>
    //   </Grid>
    //   <Grid 
    //     container 
    //     direction="column" 
    //     spacing={2}
    //     wrap 
    //     item 
    //     xs={12} 
    //     sm={6}
    //     md={3}>
    //     <Grid item>
    //       <PupCard pup={Minnie} name="Minnie"/>
    //     </Grid>
    //     <Grid item>
    //       <PupCard pup={Sharky} name="Sharky" />
    //     </Grid>
    //   </Grid>
    //   <Grid 
    //     container 
    //     direction="column" 
    //     spacing={2}
    //     wrap 
    //     item 
    //     xs={12} 
    //     sm={6}
    //     md={3}>
    //     <Grid item>
    //       <PupCard pup={Lady} name="Lady" />
    //     </Grid>
    //     <Grid item>
    //     </Grid>
    //   </Grid>
    //   <Grid 
    //     container 
    //     direction="column" 
    //     spacing={2}
    //     wrap 
    //     item 
    //     xs={8} 
    //     sm={6}
    //     md={3}>
    //     <Grid item>
    //       <PupCard pup={Brandy} name="Brandy" />
    //     </Grid>
    //     <Grid item>
    //     </Grid>
    //   </Grid>
    // </Grid>



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
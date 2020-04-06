import React from 'react';
import Home from '@material-ui/icons';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import Img from '../img/IMG_0180.JPG';

function Content() {
  return (
    <Card>
      <CardMedia 
        image={Img}
        style={{height: "650px", minWidth: "500px"}}>
      </CardMedia>
      <CardContent>
        <Typography>
          Pupper
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Content;
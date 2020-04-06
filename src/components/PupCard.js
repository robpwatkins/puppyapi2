import React from 'react';
import Home from '@material-ui/icons';
import { Card, CardMedia, CardContent, CardActionArea, Typography } from '@material-ui/core';
import Img from '../img/IMG_0180.JPG';

function PupCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia 
          component="img"
          image={Img}>
        </CardMedia>
      </CardActionArea>
      <CardContent>
        <Typography>
          Pupper
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PupCard;
import React from 'react';
import Home from '@material-ui/icons';
import { Card, CardMedia, CardContent, CardActionArea, Typography } from '@material-ui/core';

function PupCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia 
          component="img"
          image={props.pup}>
        </CardMedia>
      </CardActionArea>
      <CardContent style={{padding: "10px"}}>
        <Typography variant="subtitle1">
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PupCard;
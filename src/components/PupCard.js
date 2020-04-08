import React from 'react';
import Home from '@material-ui/icons';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

function PupCard(props) {
  return (
    <Card className="pupCard" raised minWidth="375px">
      <CardMedia 
        component="img"
        image={props.pup}>
      </CardMedia>
      <CardContent style={{padding: "10px"}}>
        <Typography variant="subtitle1">
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PupCard;
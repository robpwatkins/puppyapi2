import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

function PupCard(props) {
  return (
    <Card className="pupCard" raised>
      <CardMedia 
        component="img"
        image={props.pup}>
      </CardMedia>
      <CardContent style={{padding: "5px", color: "", textShadow: "", background: ""}}>
        <Typography variant="subtitle1">
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PupCard;
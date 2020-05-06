import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { checkAuth } from '../checkAuth';

const nameStyle = {
  textAlign: "center"
}

const divStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "center"
}

const iconStyle = {
  position: "absolute",
  marginLeft: "-55px"
}

const PupCard = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

const handleHoverandClick = () => {
  if (isClicked) {
    return (
      <Favorite color="secondary" style={iconStyle} />
    )
  } else {
    if (isShown) {
      return (
        <FavoriteBorder style={iconStyle} />
      )
    } else {
      return null;
    }
  }
}

  return (
    <Card 
      className="pupCard" 
      raised
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={() => setIsClicked(!isClicked)}
      >
      <CardMedia 
        component="img"
        image={props.pup}>
      </CardMedia>
      <CardContent style={{padding: "5px"}}>
        <div style={divStyle}>
          {checkAuth() && handleHoverandClick()}
          <Typography variant="subtitle1" style={nameStyle}>
            {props.name}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default PupCard;
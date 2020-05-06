import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { FavoriteBorder } from '@material-ui/icons';
import { checkAuth } from '../checkAuth';

const nameStyle = {
  textAlign: "center"
}

const divStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "center"
}

class PupCard extends React.Component {
  state = {
    display: 'none'
  }

handleMouseEnter = () => {
  this.setState({ display: "block" });
}

handleMouseLeave = () => {
  this.setState({ display: "none" });
}

  render() {
    return (
      <Card 
        className="pupCard" 
        raised 
        onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave}
        >
        <CardMedia 
          component="img"
          image={this.props.pup}>
        </CardMedia>
        <CardContent style={{padding: "5px"}}>
          <div style={divStyle}>
            {checkAuth() &&
              <FavoriteBorder style={{display: `${this.state.display}`}}/>
            }
            <Typography variant="subtitle1" style={nameStyle}>
              {this.props.name}
            </Typography>
          </div>
        </CardContent>
      </Card>
    )
  }
}

export default PupCard;
import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const divStyle = {
  width: "100%", 
  textAlign: "center", 
  paddingTop: "45px"
}

const buttonStyle = {
  marginTop: "15px"
}

const h4Style = {
  marginBottom: "0px"
}

const linkStyle = {
  textDecoration: "underline",
  lineHeight: "0px"
}

class Login extends Component {
  state = {
    username: '',
    password: ''
  }


  handleTextChange = (event) => {
    const state = { ...this.state };
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    document.cookie = 'loggedIn=true';
    window.location.replace('/');
  }

  render() {
    return (
      <div style={divStyle}>
        <form action="" onSubmit={this.handleSubmit}>
          <Input
            required
            placeholder="username"
            onChange={this.handleTextChange}
            value={this.state.username}
            name="username"
            >
          </Input>
          <br />
          <Input
            required
            placeholder="password"
            onChange={this.handleTextChange}
            value={this.state.password}
            name="password"
            type="password"
            >
          </Input>
          <br />
          <Button 
            type="submit"
            variant="contained"
            style={buttonStyle}
            >login
          </Button>
        </form>
        <h4 style={h4Style}>Don't have an account?</h4>
        <Link to="" style={linkStyle}>Join the fun!</Link>
      </div>
    )
  }
}

export default Login;
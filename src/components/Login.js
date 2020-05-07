import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const divStyle = {
  width: "100%", 
  textAlign: "center", 
  paddingTop: "75px"
}

const formStyle = {
  width: "100%"
}

const inputStyle = {
  width: "21%",
  marginBottom: "10px"
}

const buttonStyle = {
  marginTop: "10px"
}

const h4Style = {
  margin: "35px 0 10px 0"
}

const linkStyle = {
  color: "inherit",
  textDecoration: "underline",
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
        <form action="" onSubmit={this.handleSubmit} style={formStyle}>
          <Input
            required
            fullwidth
            placeholder="username"
            onChange={this.handleTextChange}
            value={this.state.username}
            name="username"
            style={inputStyle}
            >
          </Input>
          <br />
          <Input
            required
            fullwidth
            placeholder="password"
            onChange={this.handleTextChange}
            value={this.state.password}
            name="password"
            type="password"
            style={inputStyle}
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
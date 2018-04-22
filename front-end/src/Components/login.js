import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import { bindActionCreators } from 'redux';
import { signIn } from '../actions/userActions';
import "./login.css";
import history from '../history';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidUpdate(){
      if(this.props.user.loggedIn){
          history.push('/');
      }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    console.log(this.props.user);
    this.props.signIn(this.state);
  }

  render() {
    const style = {
      border: '1px solid black'
    }

    if(this.props.user.isLoggedIn){
      return <Redirect to="/" />
    }
    return (
      <div className="Login bg-light">
        <h2> <center> <strong> Genie login  </strong></center> </h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit">
            Login
          </Button>
        </form>
        <br />
        <form className="form-inline my-2 my-lg-0">
          <Link to="/Register"><Button
            block
            bsSize = "medium"
            type="Register">
            Register
          </Button></Link>
          <Link to="/"><Button
            block
            bsSize = "medium"
            type="Cancel">
            Cancel
          </Button></Link>
        </form>
      </div>
    );
  }
}

function mapStateToProps({user}){
  return {user};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({signIn}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

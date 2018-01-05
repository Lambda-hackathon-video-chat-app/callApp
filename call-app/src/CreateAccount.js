import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CreateAccount extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
    }
    this.handleSetEmail = this.handleSetEmail.bind(this);
    this.handleSetPassword = this.handleSetPassword.bind(this);
    this.createUser = this.createUser.bind(this);
  }
  handleSetEmail(e) {
    this.setState({email: e.target.value});
  }
  handleSetPassword(e) {
    this.setState({password: e.target.value});
  }
  createUser(e) {
    e.preventDefault();
    const userToSave = {email: this.state.email, password: this.state.password};
    axios.post('http://localhost:5000/new-user', userToSave)
      .then((data) => {
        //localStorage.setItem('uuID', data.data._id);
        console.log(data);
        setTimeout(() => {
          window.location = '/';
        }, 200);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <form className="Login-form">
        <FormGroup className="Login-group" controlId="formHorizontalEmail">
            Email
            <FormControl 
              id="formHorizontalEmail"
              className="form-control"
              onChange={this.handleSetEmail} 
              placeholder="Email"
              type="text" 
              value={this.state.email} 
            />
          
          </FormGroup>
          <FormGroup className="Login-group" controlId="formHorizontalPassword">
            Password
            <FormControl 
              id="formHorizontalPassword"
              className="form-control"
              onChange={this.handleSetPassword} 
              placeholder="Password"
              type="password" 
              value={this.state.password} 
            />
          <Link to="/login">Already a member? Login here.</Link>
          <br/>
          <button className="btn btn-default" onClick={this.createUser}>Create Account</button>
        </FormGroup>
      </form>
    )
  }
}

export default CreateAccount;
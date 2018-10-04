import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../actions/auth';
import { /*Link,*/ Redirect } from 'react-router-dom';

import Heading from '../../components/heading';
import Button from '../../components/button';
import Input from '../../components/input';
import Hero from '../../components/hero';

import './Login.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    const { username, password } = this.state;

    dispatch(loginUser(username, password));
  }

  handleLogout = (e) => {
    const { dispatch } = this.props;

    dispatch(logoutUser());
  }

  render() {

    const { username, password } = this.state;
    const { location, isFetching, isAuthenticated, message } = this.props;

    const tokenExpired = location.search.indexOf('tokenExpired') >= 0;

    if (isAuthenticated) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div className="login">
        <Hero
          title='Simple Recipe'
          size='50'
          speed='0.01s'/>

        <Heading>Login</Heading>

        {tokenExpired && (
          <p>Login has expired</p>
        )}

        {message && (
          <p className="login__error">{message}</p>
        )}

        {isFetching && (
          <p className="login__message">Logging in <em>{username}</em>...</p>
        )}

        <form className="login__form" onSubmit={this.handleSubmit}>

          <Input className="login__input" label="Username:" name="username" value={username} onChange={this.handleInputChange} />
          <Input className="login__input" type="password" label="Password:" name="password" value={password} onChange={this.handleInputChange} />

          <Button className="login__button" disabled={isFetching}>Login</Button>

        </form>

        {/*<p><Link className="login__link" to="/register">Nýskráning</Link></p>*/}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    message: state.auth.message,
  }
}

export default connect(mapStateToProps)(Login);

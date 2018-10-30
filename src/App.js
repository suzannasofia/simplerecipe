import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom'

import Header from './components/header';
import Footer from './components/footer';
import UserRoute from './components/user-route';

import './App.css';
import './styles.css';

import Home from './routes/home';
import Login from './routes/login';
import Recipes from './routes/recipes';
import Recipe from './routes/recipe';
import EditRecipe from './routes/edit-recipe';
import AdvancedSearch from './routes/advanced-search';
import User from './routes/user';
import Users from './routes/users';
import Profile from './routes/profile';
import Register from './routes/register';
import About from './routes/about';
import NotFound from './routes/not-found';

class App extends Component {

  render() {
    const { auth } = this.props;
    return (

      <div>

        <main className="main">
        <Helmet defaultTitle="Simple Recipe" titleTemplate="%s - Simple Recipe"/>

        <Header />

        <div className="main_content">
            <Switch location={this.props.location}>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/login" exact component={Login} />
              <Route path="/recipes" exact component={Recipes} />
              <UserRoute exact path="/recipes/new" authenticated={auth.isAuthenticated} component={EditRecipe} />
              <Route exact path="/recipes/:id" component={Recipe} />
              <Route exact path="/search" component={AdvancedSearch} />
              <UserRoute exact path="/recipes/:id/edit" authenticated={auth.isAuthenticated} component={EditRecipe} />
              <UserRoute exact path="/recipes/new" authenticated={auth.isAuthenticated} component={EditRecipe} />
              <UserRoute path="/users/:id" authenticated={auth.isAuthenticated} component={User} />
              <UserRoute path="/users" authenticated={auth.isAuthenticated} component={Users} />
              <UserRoute path="/profile" authenticated={auth.isAuthenticated} component={Profile} />
              <UserRoute path="/register" authenticated={auth.isAuthenticated} component={Register} />
              <Route component={NotFound} />
            </Switch>
          </div>

      </main>

      <Footer />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}


export default withRouter(connect(mapStateToProps)(App));

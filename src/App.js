import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import logo from './logo.svg';
import { Route, Switch, /*WithRouter*/ } from 'react-router-dom'

import Header from './components/header';
import Footer from './components/footer';

import './App.css';
import './styles.css';

import Home from './routes/home';
import Recipes from './routes/recipes';
import Recipe from './routes/recipe';

class App extends Component {

  render() {
    // const { auth } = this.props;
    return (

      <div>

        <main className="main">
        <Helmet defaultTitle="Simple Recipe" titleTemplate="%s - Simple Recipe"/>

        <Header />

        <div className="main_content">
            <Switch location={this.props.location}>
              <Route path="/" exact component={Home} />
              <Route path="/recipes" exact component={Recipes} />
              <Route exact path="/recipes/:id" component={Recipe} />
            </Switch>
          </div>

      </main>

      <Footer />

      </div>
    );
  }
}

export default App;

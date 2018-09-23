import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import logo from './logo.svg';
import { Route, Switch, withRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header';

import './App.css';
import './styles.css';

import Home from './routes/home';
import Recipes from './routes/recipes';

class App extends Component {

  render() {
    const { auth } = this.props; //ath þarf að setja strax?
    return (

      <main className="main">
      <Helmet defaultTitle="Simple Recipe" titleTemplate="%s - Simple Recipe"/>

      <Header />

      <div className="main_content">
          <Switch location={this.props.location}>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipes} />
          </Switch>
        </div>

    </main>



      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //     Orri er ljótur
      //   </p>
      // </div>
    );
  }
}

export default App;

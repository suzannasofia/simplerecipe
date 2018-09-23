import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import Heading from '../../components/heading';
import Hero from '../../components/hero';

export default class Home extends Component {
  //state...
  //proptypes....
  //componentdidmount...
  //query...find recipes...
  //fetch recipes...
  //componentsdidupdate...
  //nextpage, prevpage...

  render() {
    return (
      <div>
        <Helmet title="Main Page" />
        {/*<Heading>Simple Recipe</Heading>*/}

        <Hero></Hero>

        <div>
          <p>Here is home</p>
          <Link to="/recipes">Recipes</Link>
        </div>

      </div>
    );
  }
}

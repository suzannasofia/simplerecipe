import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Hero from '../../components/hero';
import BackButton from '../../components/back-button';

export default class Home extends Component {

  render() {
    return (

      <div>
        <Hero
        title='Simple Recipe'
        size='50'
        speed='0.1s'
        />
        <Helmet title="Page not found" />
        <p>Page could not be found</p>

        <BackButton>Go back</BackButton>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import './Hero.css';

export default class Hero extends Component {

  render() {

    return(
      <section class="hero">
          <div class="hero__protection"></div>
          <div class="hero__content">
            <p class="hero__text">
              veri good recipe
            </p>
            <h2 class="hero__title">Simple Recipe</h2>
            <div class="hero__button">
              <a href="kaupa.html" class="button button--large"></a>
            </div>
          </div>
        </section>
      );

  }
}

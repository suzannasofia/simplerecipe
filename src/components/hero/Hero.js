import React, { Component } from 'react';
import './Hero.css';
// import { Link } from 'react-router-dom';

export default class Hero extends Component {

  render() {

    const { title, subTitle, size, speed } = this.props;

    var divStyle = {
      maxHeight: size + 'vh'
    };

    var titleStyle = {
      opacity: 0,
      animation: 'fade-in 2s ease-in-out forwards ' +  speed
    }

    return(
      <section className='hero' style={divStyle}>
          <div className="hero__protection"></div>
            <div className="hero__content">
              <p className="hero__text">
                {subTitle}
              </p>
              <h2 className="hero__title" style={titleStyle}>{title}</h2>
              <div className="hero__button">
                <a href="kaupa.html" className="button button--large"></a>
              </div>
            </div>
        </section>
      );

  }
}
